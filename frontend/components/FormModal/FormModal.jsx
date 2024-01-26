import React, { useState } from "react";
import styles from "./FormModal.module.css";
import Popup from "../../src/assets/formModal/Popupimage.png";
import json from "../../../backend/others/country-city.json";

//MaterialUI
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// React Hook Form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Combobox from "./Combobox";
import ColorSwitches from "./ColorSwitches";

// Yup
import * as yup from "yup";
import { Switch } from "@mui/material";
import { style } from "@mui/system";
import styled from "styled-components";
import { RadioStyle } from "./StyleRadio";

const YellowSwitch = styled(Switch)`
  & .MuiSwitch-switchBase.Mui-checked {
    color: #fba403;
  }
  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #654201;
  }
`;
const schema = yup.object({
  name: yup
    .string()
    .required("Invalid Name")
    .min(5, "O nome deve ter pelo menos 5 caracteres")
    .matches(/^[^\d]+ [^\d]+$/, "Invalid Name"),

  email: yup
    .string()
    .required("Invalid email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email"
    ),

  country: yup.string().required("Invalid Country"),

  city: yup.string().required("Invalid City"),

  code: yup
    .string()
    .required("Code Invalid")
    .matches(/^[A-Za-z]{3}-\d{3}$/, "Invalid code")
    .transform((value) => (value ? value.toUpperCase() : value)),

    car: yup
    .string()
});

const FormModal = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [citiesOptions, setCitiesOptions] = React.useState([]);

  function handleSearchCity() {
    const normalizeJson = Object.entries(json).map(([country, valor]) => ({
      country,
      ...valor,
    }));
    const getCity = normalizeJson.find(
      ({ country }) => country === watch().country
    );

    const filteredCityValues = Object.values(getCity).filter(
      (value) => value !== watch().country
    );
    const tst = Object.values(filteredCityValues).map((cities) => ({
      label: cities,
      value: cities,
    }));
    setCitiesOptions(tst);
  }

  React.useEffect(() => {
    if (!watch().country) return;
    handleSearchCity();
  }, [watch().country]);

  const onSubmit = (data) => {
    console.log({ data });
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = Object.keys(json).map((country, i) => ({
    label: country,
    value: country,
  }));

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.PopupContainer}>
          <img src={Popup} alt="PopupImage" />
          <ul className={styles.textFormContainer}>
            <li>
              <h1 className={styles.titleDrive}>Drive with MyRide</h1>
            </li>
            <li>
              <p className={styles.descDrive}>
                Register as a driver using the form below. Our team will assess
                and get back to you within 48 hours.
              </p>
            </li>
          </ul>
        </div>

        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            className={styles.stylebox}
            type="text"
            id="name"
            {...register("name")}
            placeholder="Full Name"
            onfocus="clearPlaceholder()"
            onblur="restorePlaceholder()"
          />
          <span className={styles.error}>{errors?.name?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            className={styles.stylebox}
            type="text"
            id="email"
            {...register("email")}
            placeholder="Email Adress"
          />
          <span className={styles.error}>{errors?.email?.message}</span>
        </div>

        <div className="form-group">
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Combobox
                {...field}
                options={countries}
                error={errors?.country?.message}
                id="country"
                label="Country"
              />
            )}
          />
        </div>
        <div className="form-group">
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <Combobox
                {...field}
                disabled={!citiesOptions.length}
                options={citiesOptions}
                error={errors?.country?.message}
                id="city"
                label="city"
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city"></label>
        </div>

        <div className="form-group">
          <label htmlFor="code"></label>
          <input
            className={styles.stylebox}
            type="text"
            id="code"
            {...register("code")}
            placeholder="Referral Code"
          />
          <span className={styles.error}>{errors?.code?.message}</span>
        </div>

        <div style={{ alignItems: "center", marginTop: "2vh", gap: "50vh" }}>
          <div style={{ display: "flex", gap: "110vh" }}>
            <p
              style={{
                marginRight: 10,
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "400",
                whiteSpace: "nowrap",
              }}
            >
              I drive my own car
            </p>
            <YellowSwitch
              checked={isSwitchOn}
              onChange={handleSwitchChange}
              style={{ color: "#FBA403", outlineColor: "#654201" }}
            />
          </div>
          {isSwitchOn && (
              <RadioStyle className={styles.error}>{errors?.car?.message}
                <input
                  type="radio"
                  id={"sedan"}
                  value={"sedan"}
                  aria-labelledby={"sedan-label"}
                  {...register("carType")}
                />
                <label htmlFor={"sedan"} id={"sedan-label"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="29" viewBox="0 0 52 29" fill="none">
                <path d="M38.2835 12.4471H37.424L31.5802 7.47331C31.258 7.1992 30.8494 6.97791 30.3847 6.82583C29.9199 6.67375 29.4109 6.59477 28.8952 6.59473H17.4038C15.9979 6.59473 14.7339 7.1774 14.2117 8.06623L11.6379 12.5297C10.1574 12.7909 9.05933 13.6984 9.05933 14.788V18.8847C9.05933 19.208 9.44397 19.4699 9.91886 19.4699H12.4975C12.4975 21.4092 14.8064 22.9813 17.6547 22.9813C20.503 22.9813 22.8119 21.4092 22.8119 19.4699H29.6881C29.6881 21.4092 31.9971 22.9813 34.8454 22.9813C37.6936 22.9813 40.0026 21.4092 40.0026 19.4699H42.5812C43.0561 19.4699 43.4407 19.208 43.4407 18.8847V15.9585C43.4407 14.0192 41.1318 12.4471 38.2835 12.4471ZM17.6547 21.2256C16.2327 21.2256 15.0761 20.4381 15.0761 19.4699C15.0761 18.5017 16.2327 17.7142 17.6547 17.7142C19.0767 17.7142 20.2333 18.5017 20.2333 19.4699C20.2333 20.4381 19.0767 21.2256 17.6547 21.2256ZM21.5226 12.4471H15.3409L17.4038 8.93567H21.5226V12.4471ZM24.1012 12.4471V8.93567H28.8952L33.021 12.4471H24.1012ZM34.8454 21.2256C33.4234 21.2256 32.2668 20.4381 32.2668 19.4699C32.2668 18.5017 33.4234 17.7142 34.8454 17.7142C36.2673 17.7142 37.424 18.5017 37.424 19.4699C37.424 20.4381 36.2673 21.2256 34.8454 21.2256Z" fill="#FBA403"/>
                  </svg>
                  <span>Sedan</span>
                </label>
                <input
                  type="radio"
                  id={"SUV"}
                  value={"SUV"}
                  aria-labelledby={"SUV-label"}
                  {...register("carType")}
                />
                <label htmlFor={"SUV"} id={"SUV-label"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="29" viewBox="0 0 43 29" fill="none">
                <path d="M5.82664 8.95471C3.86274 8.95471 2.28809 9.99305 2.28809 11.288V20.6214H5.82664C5.82664 21.5496 6.38585 22.4399 7.38126 23.0963C8.37667 23.7526 9.72674 24.1214 11.1345 24.1214C12.5422 24.1214 13.8922 23.7526 14.8877 23.0963C15.8831 22.4399 16.4423 21.5496 16.4423 20.6214H27.0579C27.0579 21.5496 27.6171 22.4399 28.6126 23.0963C29.608 23.7526 30.958 24.1214 32.3658 24.1214C33.7735 24.1214 35.1235 23.7526 36.119 23.0963C37.1144 22.4399 37.6736 21.5496 37.6736 20.6214H41.2121V15.9547C41.2121 14.6597 39.6375 13.6214 37.6736 13.6214L32.3658 8.95471H5.82664ZM5.82664 10.7047H12.9037V13.6214H5.82664V10.7047ZM16.4423 10.7047H23.5194V13.6214H16.4423V10.7047ZM27.0579 10.7047H31.4811L34.9489 13.6214H27.0579V10.7047ZM11.1345 18.8714C11.8383 18.8714 12.5134 19.0558 13.0111 19.3839C13.5088 19.7121 13.7884 20.1573 13.7884 20.6214C13.7884 21.0855 13.5088 21.5306 13.0111 21.8588C12.5134 22.187 11.8383 22.3714 11.1345 22.3714C10.4306 22.3714 9.75556 22.187 9.25786 21.8588C8.76015 21.5306 8.48055 21.0855 8.48055 20.6214C8.48055 20.1573 8.76015 19.7121 9.25786 19.3839C9.75556 19.0558 10.4306 18.8714 11.1345 18.8714ZM32.3658 18.8714C33.0696 18.8714 33.7446 19.0558 34.2424 19.3839C34.7401 19.7121 35.0197 20.1573 35.0197 20.6214C35.0197 21.0855 34.7401 21.5306 34.2424 21.8588C33.7446 22.187 33.0696 22.3714 32.3658 22.3714C31.6619 22.3714 30.9869 22.187 30.4892 21.8588C29.9915 21.5306 29.7118 21.0855 29.7118 20.6214C29.7118 20.1573 29.9915 19.7121 30.4892 19.3839C30.9869 19.0558 31.6619 18.8714 32.3658 18.8714Z" fill="#FBA403"/>
                </svg>
                  <span>SUV/Van</span>
                </label>
                <input
                  type="radio"
                  id={"SemiLuxo"}
                  value={"SemiLuxo"}
                  aria-labelledby={"SemiLuxo-label"}
                  {...register("carType")}
                />
                <label htmlFor={"SemiLuxo"} id={"SemiLuxo-label"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
                <path d="M20.25 10.7047H12.1123L7.22975 13.6214H5.60222C3.79567 13.6214 2.34717 14.6597 2.34717 15.9547V19.4547H5.8789C6.57874 20.8547 8.41785 21.788 10.4848 21.788C12.5518 21.788 14.3909 20.8547 15.0744 19.4547H25.4092C26.1091 20.8547 27.9482 21.788 30.0151 21.788C32.0821 21.788 33.9212 20.8547 34.6048 19.4547H38.1528V18.288C38.1528 16.993 36.4764 16.573 34.8977 15.9547L20.25 10.7047ZM9.26416 14.788L12.9261 12.4547H19.4362L25.9463 14.788H9.26416ZM10.4848 16.538C11.1323 16.538 11.7532 16.7224 12.2111 17.0506C12.6689 17.3788 12.9261 17.8239 12.9261 18.288C12.9261 18.7522 12.6689 19.1973 12.2111 19.5255C11.7532 19.8537 11.1323 20.038 10.4848 20.038C9.83734 20.038 9.21638 19.8537 8.75855 19.5255C8.30072 19.1973 8.04352 18.7522 8.04352 18.288C8.04352 17.8239 8.30072 17.3788 8.75855 17.0506C9.21638 16.7224 9.83734 16.538 10.4848 16.538ZM30.0151 16.538C30.6626 16.538 31.2836 16.7224 31.7414 17.0506C32.1992 17.3788 32.4564 17.8239 32.4564 18.288C32.4564 18.7522 32.1992 19.1973 31.7414 19.5255C31.2836 19.8537 30.6626 20.038 30.0151 20.038C29.3677 20.038 28.7467 19.8537 28.2889 19.5255C27.8311 19.1973 27.5739 18.7522 27.5739 18.288C27.5739 17.8239 27.8311 17.3788 28.2889 17.0506C28.7467 16.7224 29.3677 16.538 30.0151 16.538Z" fill="#FBA403"/>
                </svg>  
                  <span>Semi Luxury</span>
                </label>
                <input
                  type="radio"
                  id={"Luxu"}
                  value={"Luxu"}
                  aria-labelledby={"Luxu-label"}
                  {...register("carType")}
                />
                <label htmlFor={"Luxu"} id={"Luxu-label"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="29" viewBox="0 0 41 29" fill="none">
                <path d="M27.4793 7.78796L25.797 8.66296L30.0028 12.4546H23.2735V10.7046H20.75V12.4546H5.60904C3.74166 12.4546 2.24438 13.493 2.24438 14.788V18.288H5.60904C5.60904 19.2162 6.14077 20.1065 7.08727 20.7628C8.03376 21.4192 9.31748 21.788 10.656 21.788C11.9946 21.788 13.2783 21.4192 14.2248 20.7628C15.1713 20.1065 15.703 19.2162 15.703 18.288H25.797C25.797 19.2162 26.3287 20.1065 27.2752 20.7628C28.2217 21.4192 29.5054 21.788 30.8439 21.788C32.1825 21.788 33.4662 21.4192 34.4127 20.7628C35.3592 20.1065 35.8909 19.2162 35.8909 18.288H39.2556V14.788C39.2556 13.493 37.7583 12.4546 35.8909 12.4546H32.5263L27.4793 7.78796ZM10.656 16.538C11.3253 16.538 11.9672 16.7223 12.4404 17.0505C12.9136 17.3787 13.1795 17.8238 13.1795 18.288C13.1795 18.7521 12.9136 19.1972 12.4404 19.5254C11.9672 19.8536 11.3253 20.038 10.656 20.038C9.98675 20.038 9.34489 19.8536 8.87164 19.5254C8.3984 19.1972 8.13253 18.7521 8.13253 18.288C8.13253 17.8238 8.3984 17.3787 8.87164 17.0505C9.34489 16.7223 9.98675 16.538 10.656 16.538ZM30.8439 16.538C31.5132 16.538 32.1551 16.7223 32.6283 17.0505C33.1016 17.3787 33.3674 17.8238 33.3674 18.288C33.3674 18.7521 33.1016 19.1972 32.6283 19.5254C32.1551 19.8536 31.5132 20.038 30.8439 20.038C30.1747 20.038 29.5328 19.8536 29.0596 19.5254C28.5863 19.1972 28.3205 18.7521 28.3205 18.288C28.3205 17.8238 28.5863 17.3787 29.0596 17.0505C29.5328 16.7223 30.1747 16.538 30.8439 16.538Z" fill="#FBA403"/>
                </svg>
                  <span>Luxury Car</span>
                </label>
              </RadioStyle>
          )}
        </div>

        <button className={styles.submit} type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default FormModal;
