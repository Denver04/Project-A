import { Text } from "react-native";

export const CustomText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <Text allowFontScaling style={style}>
      {children}
    </Text>
  );
};
