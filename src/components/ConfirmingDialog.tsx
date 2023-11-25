import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function ConfirmingDialog(props: {
  open: boolean;
  onClose: VoidFunction;
}) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Абоба</DialogTitle>
      <DialogContent>adada</DialogContent>
    </Dialog>
  );
}
