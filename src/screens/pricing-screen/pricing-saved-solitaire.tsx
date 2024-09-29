import dayjs from "dayjs";
import { useCallback, useContext, useEffect, useState } from "react";

import { deleteSolitairePrice, getSolitairePriceList } from "@/api/pricing";
import { ArrowUpIcon, TrashIcon, EyeIcon, Button } from "@/components";
import LoginModal from "@/components/modals/login-modal";
import ValidationModal from "@/components/modals/validation-modal";
import { NOTIFICATION_MESSAGES } from "@/config";
import { useCurrency } from "@/context/currency-context";
import KnowYourDiamondContext from "@/context/know-your-diamond-context";
import LoaderContext from "@/context/loader-context";
import NotificationContext from "@/context/notification-context";
//import useCountryCode from "@/hooks/use-country-code";
import StonePrice from "@/interface/stone-price";
import { getToken, setRedirectionRoute } from "@/local-storage";
import { formatByCurrency } from "@/util";
import { reverseCountryCurrencyMap } from "@/util/reverse-country-currency-map";

interface Props {
  children?: React.ReactNode;
}

const SavedSolitares: React.FC<Props> = () => {
  const [priceList, setPriceList] = useState<Array<StonePrice>>([]);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const { notifyErr } = useContext(NotificationContext);
  const { setSelectedKyd } = useContext(KnowYourDiamondContext);

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showValidationMessage, setShowValidationMessage] =
    useState<string>("");

  //const countrycode = useCountryCode();
  const { currency } = useCurrency(); //for currency
  const countrycode = reverseCountryCurrencyMap[currency];

  const fetchPrices = useCallback(async () => {
    showLoader();
    try {
      const res = await getSolitairePriceList(countrycode as string);
      setPriceList(res.data.data || []);
    } catch (err) {
      notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
    }
    hideLoader();
  }, [hideLoader, notifyErr, showLoader]);

  const removePrice = async (priceItem: StonePrice) => {
    try {
      showLoader();
      await deleteSolitairePrice(priceItem.id, countrycode as string);
      await fetchPrices();
    } catch (err) {
      notifyErr(NOTIFICATION_MESSAGES.SOMETHING_WRONG);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    if (!getToken()) {
      setRedirectionRoute("/pricing");
      setShowLogin(true);
      return;
    } else {
      fetchPrices();
    }
  }, [fetchPrices]);

  const openSelectedKyd = (data: StonePrice) => () => {
    setSelectedKyd(data);
  };

  const Card: React.FC<StonePrice> = (props) => (
    <div className="flex flex-col items-end gap-2 self-stretch border border-gray_light p-2 text-base">
      <div className="flex flex-col justify-between items-center self-stretch">
        <div className="flex flex-col items-start gap-3 self-stretch mb-4">
          <span className="font-normal">Diamond Details:</span>
          <div className="flex flex-col items-start gap-[9px] self-stretch">
            <table className="md:hidden table w-full table-fixed [&>tr>td]:text-center font-body  font-normal">
              <tr className="w-full">
                <td>Shape</td>
                <td>Carat</td>
                <td>Colour</td>
                <td>Clarity</td>
              </tr>
              <tr className="w-full [&>td]:text-gold">
                <td>{props.shape}</td>
                <td> {props.carat} </td>
                <td>{props.colour}</td>
                <td> {props.purity} </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="text-sm flex flex-col justify-center items-center gap-2 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <div className="font-normal font-montserrat">Current Price</div>
            <div className="font-normal font-montserrat leading-normal">
              {/* {`${formatByCurrency(
                props.current_price,
                props.currency_locale,
                props.currency_code
              )}`} */}
              {props.currency_locale &&
                props.currency_code &&
                props.currency_code !== "" &&
                `${formatByCurrency(
                  props.price,
                  props.currency_locale,
                  props.currency_code
                )}`}
            </div>
          </div>

          <div className="flex justify-between items-center self-stretch">
            <div className="font-normal font-montserrat">Last Checked Date</div>
            <div className="font-normal font-montserrat leading-normal">
              {dayjs(new Date(props.chkdate)).format("DD MMM, YYYY")}
            </div>
          </div>

          <div className="flex justify-between items-center self-stretch">
            <div className="font-normal font-montserrat">
              Last Checked Price
            </div>
            <div className="font-normal font-montserrat leading-normal">
              {/* {`${formatByCurrency(props.price, "en-IN", "INR")}`} */}
              {props.currency_locale &&
                props.currency_code &&
                props.currency_code !== "" &&
                `${formatByCurrency(
                  props.price,
                  props.currency_locale,
                  props.currency_code
                )}`}
            </div>
          </div>

          <div className="flex justify-between items-center self-stretch">
            <div className="font-normal font-montserrat">% Change</div>
            <div className="flex justify-center items-center gap-1">
              <span className="text-[#3B9D45] font-normal font-montserrat leading-normal">
                {(props.diff * 100).toFixed(0)} %
              </span>
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center self-stretch gap-4">
        <Button
          themeType="light"
          classes="flex px-2 py-3 justify-center items-center gap-2 text-sm font-normal !shadow-none"
          // onClick={onClickHandler}
        >
          <div className="flex gap-2" onClick={openSelectedKyd(props)}>
            <EyeIcon className="fill-black" /> <span>View</span>
          </div>
        </Button>
        <Button
          themeType="light"
          classes="flex px-2 py-3 justify-center items-center gap-2 text-sm font-normal !shadow-none text-rose-600"
          onClick={() => removePrice(props)}
        >
          <div className="flex gap-2">
            <TrashIcon /> <span>Remove</span>
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full items-start gap-x-[17px] font-montserrat">
      <LoginModal setShowLogin={setShowLogin} showLogin={showLogin} />
      <ValidationModal
        setShow={() => setShowValidationMessage("")}
        show={!!showValidationMessage.length}
        message={showValidationMessage}
      />
      <div className="flex md:hidden p-4 flex-col justify-center items-center ">
        {priceList.map((priceItem) => (
          <Card key={priceItem.id} {...priceItem} />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-3 gap-3 p-4 flex-col justify-center items-center ">
        {priceList.map((priceItem) => (
          <Card key={priceItem.id} {...priceItem} />
        ))}
      </div>
    </div>
  );
};

export default SavedSolitares;
