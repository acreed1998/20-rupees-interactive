import { Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedChoices,
  getSelectedChoicesTitles,
} from "../redux/selectors";
import { removeFiGuide, setSelectedChoices } from "../redux/slices/mainSlice";

export const useChoiceLogic = ({ item }) => {
  const { title, text, multi, upgradable, cost, buttonText } = item;
  const dispatch = useDispatch();
  const choiceWithMultipleCosts = Array.isArray(cost);
  const useCard = choiceWithMultipleCosts || multi;
  const WrapperComponent = useCard ? Card : Button;
  const selectedChoices = useSelector(getSelectedChoices);
  const selectedChoiceTitles = useSelector(getSelectedChoicesTitles);
  const masterSwordPicked = selectedChoiceTitles?.includes("Master Sword*");

  const selectedChoice = selectedChoices.find((choice) => {
    const equalTitles = choice?.title === title;
    return equalTitles;
  });

  const selectedChoicesWithoutThisChoice =
    selectedChoices?.filter((choice) => choice?.title !== title) ?? [];

  const isSelectedMultiOption = choiceWithMultipleCosts
    ? cost.map((val) => val === selectedChoice?.cost)
    : [false, false];

  const selectChoiceNumberOfTimesSelected = selectedChoice?.selected ?? 0;

  const selectedChoiceOrItem = selectedChoice ?? item;
  const selectedChoiceOrItemCost = selectedChoiceOrItem?.cost;

  const onButtonCardClick = () => {
    if (!selectedChoice) {
      dispatch(setSelectedChoices([...selectedChoices, item]));
      return;
    }
    dispatch(setSelectedChoices([...selectedChoicesWithoutThisChoice]));
  };

  const onMultiCostOptionClick =
    (cost, upgraded = false) =>
    () => {
      if (selectedChoice?.cost === cost) {
        dispatch(setSelectedChoices([...selectedChoicesWithoutThisChoice]));
        return;
      }
      dispatch(
        setSelectedChoices([
          ...selectedChoicesWithoutThisChoice,
          { ...item, cost, upgraded },
        ])
      );
    };

  const onMultiPickOptionClick = (add, cost) => () => {
    const costToUse = cost ?? selectedChoiceOrItemCost;
    const numberOfTimesCostToUseSelected =
      selectedChoiceOrItem?.[costToUse] ?? 0;
    if (add) {
      dispatch(
        setSelectedChoices([
          ...selectedChoicesWithoutThisChoice,
          {
            ...selectedChoiceOrItem,
            cost: costToUse,
            selected: selectChoiceNumberOfTimesSelected + 1,
            [costToUse]: numberOfTimesCostToUseSelected + 1,
          },
        ])
      );
      return;
    } else if (numberOfTimesCostToUseSelected === 0 && !add) {
      return;
    } else if (selectChoiceNumberOfTimesSelected <= 1 && !add) {
      dispatch(setSelectedChoices([...selectedChoicesWithoutThisChoice]));
      if (item?.title === "Master Sword*" && !add) dispatch(removeFiGuide());
      return;
    }
    dispatch(
      setSelectedChoices([
        ...selectedChoicesWithoutThisChoice,
        {
          ...selectedChoiceOrItem,
          cost: costToUse,
          selected: selectChoiceNumberOfTimesSelected - 1,
          [costToUse]: numberOfTimesCostToUseSelected - 1,
        },
      ])
    );
  };

  return {
    item,
    dispatch,
    choiceWithMultipleCosts,
    useCard,
    WrapperComponent,
    selectedChoices,
    selectedChoiceTitles,
    selectedChoice,
    onButtonCardClick,
    onMultiCostOptionClick,
    onMultiPickOptionClick,
    isSelectedMultiOption,
    selectedChoiceOrItem,
    masterSwordPicked,
  };
};
