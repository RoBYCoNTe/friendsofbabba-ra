import {
  EditButton as RaEditButton,
  DeleteButton as RaDeleteButton,
} from "react-admin";
import EditButton from "../workflow/buttons/EditButton";
import ExportToButton from "./ExportToButton";

const buttons = {
  RaEditButton,
  RaDeleteButton,

  // Workflow smart buttons
  EditButton,
  ExportToButton,
};

export default buttons;
