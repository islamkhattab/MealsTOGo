import React from "react";
import { SvgXml } from "react-native-svg";

import {
  Spacer,
  spacerPostitions,
  spacerSizes,
} from "../../../components/spacer/spacer.component";
import { Text, variants } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Rating,
  Info,
  Address,
  Icon,
} from "./restaurant-info-card.styles";

import open from "../../../../assets/open";
import star from "../../../../assets/star";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant={variants.label}>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => {
              return <SvgXml key={index} width={20} height={20} xml={star} />;
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant={variants.error}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer position={spacerPostitions.left} size={spacerSizes.medium}>
              {isOpenNow && <SvgXml width={20} height={20} xml={open} />}
            </Spacer>
            <Spacer position={spacerPostitions.left} size={spacerSizes.medium}>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
