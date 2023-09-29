import { Router } from "express";
import {
  AddNote,
  DeleteNote,
  RetrieveNotes,
  RetrieveNotesWithPagination,
  SearchBaseQuery,
  UpdateNote,
  deleteNote,
} from "../controller/noteController.js";
import { validation } from "../middleware/validation.js";
import {
  AddNoteValidation,
  DeleteNoteValidation,
  QueryNoteValidation,
  UpdateNoteValidation,
} from "../controller/noteValidation.js";
const router = Router();
router.get("/:status", RetrieveNotes);
router.put("/delete/:id", deleteNote);
router.post("/", validation(AddNoteValidation), AddNote);
router.delete("/:id", validation(DeleteNoteValidation), DeleteNote);
router.put("/:id", validation(UpdateNoteValidation), UpdateNote);
router.get(
  "/pagination",
  validation(QueryNoteValidation),
  RetrieveNotesWithPagination
);
router.get("/search/query", SearchBaseQuery);
export default router;
