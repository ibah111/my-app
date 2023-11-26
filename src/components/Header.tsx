import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import InsertedImage from "./Image";
import { naborMini, nasadkaMini, steelCan, zazhimMini } from "../images";
import Order from "./Order";
import { useAppSelector } from "../store/hooks/redux";
import { Addon } from "../store/reducers/addonsSlice";

export default function Header() {
  const addons: Addon[] = [
    {
      title: "Набор для копчения",
      price: 7990,
      pic: naborMini,
    },
    {
      title: "Жестяные банки",
      price: 7990,
      pic: steelCan,
    },
    {
      title: "Защитные зажимы",
      price: 7990,
      pic: zazhimMini,
    },
    {
      title: "Насадка для самогоноварения",
      price: 7990,
      pic: nasadkaMini,
    },
  ];

  const {} = useAppSelector((state) => state.addonReducer);

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
        <Grid className="group">
          {addons.map((item) => {
            return (
              <>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
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
