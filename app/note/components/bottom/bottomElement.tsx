import axios from "axios";
import { useEffect, useState } from "react";
import { NoteTitle } from "./components/noteTitle";
import { Editor } from "./components/editor";

export function BottomElement() {
  return (
    <div className="flex h-full flex-row">
      <NoteTitle />
      <Editor />
    </div>
  );
}
