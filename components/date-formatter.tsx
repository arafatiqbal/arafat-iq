import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const showDate = dateString;
  const date = parseISO(dateString);

  return showDate ? (
    <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
  ) : (
    <></>
  );
};

export default DateFormatter;
