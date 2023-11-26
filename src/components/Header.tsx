import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TextMaskCustom } from "../utils/fieldMask";
import React from "react";
import ConfirmingDialog from "./ConfirmingDialog";
import InsertedImage from "./Image";
import { naborMini, nasadkaMini, steelCan, zazhimMini } from "../images";
import Order from "./Order";
class Addon {
  id: number;
  title: string;
  price: number;
  pic: any;
  checked: boolean;
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
      pic: naborMini,
      checked: false,
    },
    {
      id: 2,
      title: "Жестяные банки",
      price: 7990,
      pic: steelCan,
      checked: true,
    },
    {
      id: 3,
      title: "Защитные зажимы",
      price: 7990,
      pic: zazhimMini,
      checked: false,
    },
    {
      id: 4,
      title: "Насадка для самогоноварения",
      price: 7990,
      pic: nasadkaMini,
      checked: true,
    },
  ];
  /**
   *
   * Условие на кнопку
   * @returns
   */

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          maxHeight: 1920,
          width: "100%",
          position: "absolute",
        }}
      >
        <Grid className="header">
          Откройте больше возможностей «Крестьянки»
        </Grid>
        <Grid className="under">Вместе с полезными дополнениями</Grid>
        {/**
         * Чек лист покупки
         */}
        <Grid className="group">
          {addons.map((item) => {
            return (
              <>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox value={item.checked} checked={item.checked} />
                    }
                    label={
                      <>
                        <img src={item.pic} alt="pic" className="pic" />
                        {` ${item.title}, ${item.price}Р`}
                      </>
                    }
                  />
                </FormGroup>
              </>
            );
          })}
        </Grid>
        {/**
         * Фотка самогона
         */}
        <Grid className="samogonPic">
          <InsertedImage />
        </Grid>
        {/**
         * Order
         */}
        <Order />
      </Grid>
    </>
  );
}
