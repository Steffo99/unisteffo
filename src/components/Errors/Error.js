import Box, {BoxColors} from "../Elements/Box";

export default function(props) {
    return (
        <Box color={BoxColors.RED}>
            {props.children}
        </Box>
    );
}
