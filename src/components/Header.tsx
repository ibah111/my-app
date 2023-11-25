import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
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
  return (
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
        order
      </Grid>
    </Grid>
  );
}
