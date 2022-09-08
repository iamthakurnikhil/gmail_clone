import React, { useState } from "react";
import "../css/compose.css";
import HeightIcon from "@mui/icons-material/Height";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "./../firebase";
import {  FieldValue } from "firebase/firestore";


function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    
    if (to === "") {
      return alert("to is required");
    }
    if (subject === "") {
      return alert("to is required");
    }
    if (message === "") {
      return alert("to is required");
    }

    db.collection("emails").add({
      to,
      subject,
      message,
      // timestamp: FieldValue.serverTimeStamp()
    });

    alert("Email sent Successfully")
  }

  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>

        <div className="compose_header_right">
          <RemoveIcon></RemoveIcon>
          <HeightIcon></HeightIcon>
          <CloseIcon onClick={() => dispatch(closeSendMessage())}></CloseIcon>
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose_body">
          <div className="compose_bodyform">
            <input
              type="email"
              placeholder="Receipents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            ></input>

            <input
              type="text"
              placeholder="Subjects"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></input>

            <textarea
              rows="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="compose_footer">
          <div className="compose_footerLeft">
            <button type="submit">
              Send <ArrowDropDownIcon></ArrowDropDownIcon>
            </button>
          </div>

          <div className="compose_footerRight">
            <FormatColorTextIcon></FormatColorTextIcon>
            <AttachFileIcon></AttachFileIcon>
            <LinkIcon></LinkIcon>
            <InsertEmoticonIcon></InsertEmoticonIcon>
            <NoteAddIcon></NoteAddIcon>
            <PhotoIcon></PhotoIcon>
            <PhonelinkLockIcon></PhonelinkLockIcon>
            <CreateIcon></CreateIcon>
            <MoreVertIcon></MoreVertIcon>
            <DeleteIcon></DeleteIcon>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
