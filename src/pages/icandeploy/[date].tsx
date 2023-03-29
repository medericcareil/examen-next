import CanIDeployComponent from "@/hooks/canIDeployComponent";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ICanDeploy() {
    const router = useRouter();
    const dateQuery = router.query.date;
    const [date, setDate] = useState(dateQuery as string);

    return <CanIDeployComponent date={date} /> 
}
