import Input from "./components/Input/input";
import { useState } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";
import GitHub from "./components/GitHub/GitHub";
import { BounceLoader } from "react-spinners";
import Google from "./svg/google.svg";
import lnm from "./svg/lnm.png";
import axios from "axios";

function App() {
  const [spinner, setSpinner] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [userForm, setuserForm] = useState({
    transactionType: "debit",
    phoneNumber: "",
    amount: 1,
    comment: "",
    appId: "12345",
    walletId: 2,
  });

  const sendMoneyHandler = async () => {
    const fee = 1;
    console.log(userForm);
    setSpinner(true);
    try {
      const result = await axios.post(
        "http://192.168.86.248:8000/transaction",
        {
          transactionType: userForm.transactionType,
          phoneNumber: userForm.phoneNumber,
          fee: fee,
          comment: userForm.comment,

          amount: +userForm.amount,
          appId: userForm.appId,
          walletId: userForm.walletId,
        }
      );

      if (result) {
        console.log(result);
        setIsActive(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="custom-page">
      {isActive ? (
        <Form>
          <GitHub />
        </Form>
      ) : (
        <Form>
          <img src={lnm} alt="Lipa Na Mpesa" width="200px"></img>
          {spinner ? (
            <>
              <BounceLoader
                cssOverride={{ margin: "30px auto" }}
                size="80"
                color="red"
              />
              <br />
              <h2>sending Request ...</h2>
              <p>Enter Mpesa Pin when prompted</p>
              <br />

              <p>Please wait...</p>
            </>
          ) : (
            <>
              <Input
                type="text"
                value={"debit"}
                placeholder={"Transaction type"}
                onChange={(e) => {
                  setuserForm({
                    ...userForm,
                    transactionType: e.target.value,
                  });
                }}
              />
              <Input
                type="text"
                value={userForm.phoneNumber}
                placeholder={"Phone Number"}
                onChange={(e) => {
                  setuserForm({ ...userForm, phoneNumber: e.target.value });
                }}
              />
              <Input
                type="number"
                value={1}
                placeholder={"Amount "}
                onChange={(e) => {
                  setuserForm({ ...userForm, amount: e.target.value });
                }}
              />
              <Input
                type="text"
                value={userForm.comment}
                placeholder={"Comment"}
                onChange={(e) => {
                  setuserForm({ ...userForm, comment: e.target.value });
                }}
              />
              <Input
                type="text"
                value={"12345"}
                placeholder={"AppId"}
                onChange={(e) => {
                  setuserForm({ ...userForm, appId: e.target.value });
                }}
              />
              <Input
                type="number"
                value={2}
                placeholder={"WalletId"}
                onChange={(e) => {
                  setuserForm({ ...userForm, walletId: e.target.value });
                }}
              />
              <Button
                type="submit"
                text="Send Request"
                onClick={sendMoneyHandler}
              />
            </>
          )}
        </Form>
      )}
    </div>
  );
}

export default App;
