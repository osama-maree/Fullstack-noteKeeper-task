import { Router } from "express";
import {
  AddNote,
  DeleteNote,
  RetrieveNotes,
  RetrieveNotesWithPagination,
  SearchBaseQuery,
  UpdateNote,
} from "../controller/noteController.js";
import { validation } from "../middleware/validation.js";
import {
  AddNoteValidation,
  DeleteNoteValidation,
  QueryNoteValidation,
  UpdateNoteValidation,
} from "../controller/noteValidation.js";
const router = Router();
router.get("/", RetrieveNotes);
router.post("/", validation(AddNoteValidation), AddNote);
router.delete("/:id", validation(DeleteNoteValidation), DeleteNote);
router.put("/:id", validation(UpdateNoteValidation), UpdateNote);
router.get(
  "/pagination",
  validation(QueryNoteValidation),
  RetrieveNotesWithPagination
);
router.get("/search", SearchBaseQuery);
export default router;
