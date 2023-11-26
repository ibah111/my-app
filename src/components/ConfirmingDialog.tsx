import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function ConfirmingDialog(props: {
  open: boolean;
  onClose: VoidFunction;
}) {
  return (
    <Dialog open={props.open}>
      <DialogTitle
        sx={{
          textAlign: "center",
        }}
      >
        Благодарим за заказ
      </DialogTitle>
      <DialogContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography>
          {
            "Менеджер уже получил ваше обращение\n он свяжется с вами в течение 10 минут"
          }
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
