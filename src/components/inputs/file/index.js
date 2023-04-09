import inputFileTemplate from "./input.hbs";
import classes from "./input.module.scss";

const inputFile = ({value, isImg=true}) => {
    const context = {
        labelClass: classes.label,
        value,
        isImg
    }
    return inputFileTemplate(context);
}

export default inputFile;