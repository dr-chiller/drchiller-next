import HomeChooseClient from "./choose-client";
import { FaAward, FaUsers, FaCogs, FaClock } from "react-icons/fa";

const reasons = [
    { icon: <FaAward />, title: "Proven Expertise" },
    { icon: <FaUsers />, title: "Dedicated Support" },
    { icon: <FaCogs />, title: "Cutting-Edge Solutions" },
    { icon: <FaClock />, title: "On-Time Delivery" },
];

export default function HomeChoose() {
    return <HomeChooseClient reasons={reasons} />;
}
