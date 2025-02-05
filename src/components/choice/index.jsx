import { Card, Grid2, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useChoiceLogic } from "./useChoiceLogic";
import { MultiButtonChoice } from "./MultiButtonChoice";
import { MultiPickButtons } from "./MultiPickButtons";

export const Choice = ({ item }) => {
  const { title, multi, text, cost, src } = item;
  const {
    selectedChoice,
    useCard,
    WrapperComponent,
    onButtonCardClick,
    onMultiCostOptionClick,
    onMultiPickOptionClick,
    choiceWithMultipleCosts,
    isSelectedMultiOption,
    selectedChoiceOrItem,
  } = useChoiceLogic({ item });

  const firstMultiCost = choiceWithMultipleCosts ? cost[0] : cost;

  return (
    <Card
      className={`normal-case h-full ${
        selectedChoice ? "bg-green-400" : "bg-amber-50"
      } ${useCard ? "px-2 py-1.5" : ""}`}
      component={WrapperComponent}
      {...(!useCard ? { fullWidth: true, onClick: onButtonCardClick } : null)}
    >
      <Grid2 className="h-full" container spacing={2}>
        <Grid2 size={12}>
          <Grid2 container justifyContent="center">
            <img
              className="flex h-90 w-auto"
              height={360}
              width={360}
              src={`/${src}`}
              alt={`${title} image`}
              loading="lazy"
            />
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="h4">{title}</Typography>
        </Grid2>
        <MultiPickButtons
          title={item?.buttonText?.[0]}
          multi={multi}
          onMultiPickOptionAddClick={onMultiPickOptionClick(
            true,
            firstMultiCost
          )}
          onMultiPickOptionRemoveClick={onMultiPickOptionClick(
            false,
            firstMultiCost
          )}
          picked={
            choiceWithMultipleCosts
              ? selectedChoiceOrItem[firstMultiCost]
              : selectedChoiceOrItem?.selected
          }
        />
        {Array.isArray(cost) && (
          <MultiPickButtons
            title={item?.buttonText?.[1]}
            multi={multi}
            onMultiPickOptionAddClick={onMultiPickOptionClick(true, cost[1])}
            onMultiPickOptionRemoveClick={onMultiPickOptionClick(
              false,
              cost[1]
            )}
            picked={selectedChoiceOrItem[cost[1]]}
          />
        )}
        <Grid2 size={12}>
          <Typography variant="body1">{text}</Typography>
        </Grid2>
        <MultiButtonChoice
          item={item}
          isSelectedMultiOption={isSelectedMultiOption}
          onMultiCostOptionClick={onMultiCostOptionClick}
          multi={multi}
          choiceWithMultipleCosts={choiceWithMultipleCosts}
        />
      </Grid2>
    </Card>
  );
};

Choice.propTypes = {
  item: PropTypes.object,
};
