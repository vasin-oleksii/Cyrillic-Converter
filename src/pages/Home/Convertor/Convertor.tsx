import { Alert, Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { flex, flexWithDicertion, btn } from "./style.ts";
import convertToEng from "../../../components/shared/func/convertToEng.ts";

const Convertor = () => {
  const [textFromArea, setTextFromArea] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const copyInBoofer = () => {
    navigator.clipboard.writeText(convertToEng(textFromArea));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  useEffect(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <Box sx={flex}>
      <Box sx={flexWithDicertion}>
        <label htmlFor="write" style={{ fontSize: "20px" }}>
          Write
        </label>
        <textarea
          id="write"
          placeholder="Write here"
          cols={50}
          rows={20}
          value={textFromArea}
          style={{ color: "#d3d3d3" }}
          onChange={(e) => setTextFromArea(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && copyInBoofer()}
          ref={textAreaRef}
        ></textarea>
      </Box>

      <Box sx={flexWithDicertion} ml={3}>
        <label htmlFor="response" style={{ fontSize: "20px" }}>
          Response
        </label>
        <textarea
          id="response"
          placeholder="Response here"
          cols={50}
          rows={20}
          value={textFromArea.length === 0 ? "" : convertToEng(textFromArea)}
          readOnly
          style={{ fontSize: "24px" }}
        ></textarea>
        <Button variant="outlined" sx={btn} onClick={copyInBoofer}>
          Copy
        </Button>
        {showAlert && (
          <Box position="absolute" bottom="0px" left="45%">
            <Alert severity="success">This is a success Alert.</Alert>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Convertor;
