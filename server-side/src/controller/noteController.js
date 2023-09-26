import { noteModel } from "../../DB/model/noteModel.js";
import { pagination } from "../services/pagination.js";

export const RetrieveNotes = async (req, res, next) => {
  try {

    const notes = await noteModel.find({deleted:req.body.status});
    res.status(200).json(notes);
  } catch (err) {
    return next(new Error(err.message, { cause: 500 }));
  }
};
export const AddNote = async (req, res, next) => {
  try {
    const { content, title } = req.body;
    const savedNote = await noteModel.create({ content, title });
    if (savedNote) {
      res.status(200).json({ message: "success added", savedNote });
    } else {
      return next(new Error("Error in Added", { cause: 400 }));
    }
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const DeleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteNote = await noteModel.findByIdAndDelete(id);
    if (deleteNote) {
      res.status(200).json({ message: "success deleted", deleteNote });
    } else {
      return next(new Error("Error in Added", { cause: 400 }));
    }
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const UpdateNote = async (req, res, next) => {
  try {
    const { content, title } = req.body;
    const { id } = req.params;
    const updateNote = await noteModel.findByIdAndUpdate(
      id,
      {
        content,
        title,
      },
      { new: true }
    );
    if (updateNote) {
      res.status(200).json({ message: "success updated", updateNote });
    } else {
      return next(new Error("Error in Added", { cause: 400 }));
    }
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

// bonus  get notes using query with pagination
export const RetrieveNotesWithPagination = async (req, res, next) => {
  try {
    const { page, size } = req.query;
    const { limit, skip } = pagination(page, size);
    const posts = await noteModel.find({}).limit(limit).skip(skip);
    res.status(200).json(posts);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

//bonus Search base query
export const SearchBaseQuery = async (req, res, next) => {
  try {
    const { content, title } = req.query;
    const SearchRes = await noteModel.find({
      $or: [
        { title: { $regex: title, $options: "i" } },
        { content: { $regex: content, $options: "i" } },
      ],
    });
    res.status(200).json(SearchRes);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
