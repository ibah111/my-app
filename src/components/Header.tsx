import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TextMaskCustom } from "../utils/fieldMask";
import React from "react";
import ConfirmingDialog from "./ConfirmingDialog";
class Addon {
  id: number;
  title: string;
  price: number;
}
export default function Header() {
  const addons: Addon[] = [
    /**
     * Можно реализовать получение массив с сервера
     */
    {
      id: 1,
      title: "Набор для копчения",
      price: 7990,
    },
    {
      id: 2,
      title: "Жестяные банки",
      price: 7990,
    },
    {
      id: 3,
      title: "Защитные зажимы",
      price: 7990,
    },
    {
      id: 4,
      title: "Насадка для самогоноварения",
      price: 7990,
    },
  ];
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  /**
   *
   * Условие на кнопку
   * @returns
   */
  const condition = (name: string, phone: string): boolean => {
    if (name && phone.length === 17) return false;
    return true;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Grid
        container
        border={"solid"}
        sx={{
          height: "100%",
          maxHeight: 1920,
          width: "100%",
          position: "absolute",
        }}
      >
        <Grid className="header" border={"solid"}>
          Откройте больше возможностей «Крестьянки»
        </Grid>
        <Grid className="under" border={"solid"}>
          Вместе с полезными дополнениями
        </Grid>
        {/**
         * Чек лист покупки
         */}
        <Grid className="group" border={"solid"}>
          {addons.map((item) => {
            return (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={`${item.title}, ${item.price}Р`}
                />
              </FormGroup>
            );
          })}
        </Grid>
        {/**
         * Фотка самогона
         */}
        <Grid className="samogonPic" border={"solid"}>
          samogonPic
        </Grid>
        <Grid className="order" border={"solid"}>
          <Grid
            sx={{
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography>Заказ</Typography>
          </Grid>
          <Stack direction={"column"}>
            <TextField
              helperText="Введите имя"
              label="Имя"
              onChange={(event) => {
                setName(event.target.value as string);
              }}
            />
            <TextField
              label="Номер телефона"
              name="textmask"
              id="formatted-text-mask-input"
              helperText="Введите номер телефона"
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
              onChange={(event) => {
                setPhone(event.target.value as string);
              }}
            />
          </Stack>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={"Покупка в рассрочку"}
            />
          </FormGroup>
          <Grid
            sx={{
              position: "relative",
              textAlign: "center",
            }}
          >
            <Button
              disabled={condition(name, phone)}
              variant="contained"
              onClick={() => {
                /**
                 * кнопка открывает диалог и отправляет запрос на сервер
                 */
                setOpen(true);
              }}
            >
              <Typography>Заказать</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {open && <ConfirmingDialog open={open} onClose={handleClose} />}
    </>
  );
}
