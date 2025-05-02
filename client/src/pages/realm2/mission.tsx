import { useParams, useLocation } from "wouter";
import Realm2Missions from "./Missions";

export default function Realm2Mission() {
  const params = useParams<{ missionId: string }>();
  const [, setLocation] = useLocation();
  
  // Forward to the new Missions component that handles everything
  return <Realm2Missions />;
}