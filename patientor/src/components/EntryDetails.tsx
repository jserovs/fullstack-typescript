import { Entry, HospitalEntry} from "../types";

export const EntryDetails: React.FC <{entry: Entry}> = ({}) => {
    switch (entry.type) {
    case "Hospital":
        return <HospitalEntry>
    default:
        return  assertNever(entry);
    }

}