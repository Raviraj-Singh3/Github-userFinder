import { Routes, Route } from "react-router-dom"
import ProfileDex from "../ProfileDex"
import ProfileDetails from "../ProfileDetails"

export default function CustomRoute() {
  return (
    <Routes>
        <Route path="/" element={<ProfileDex />} />
        <Route path="/:id" element={<ProfileDetails />} />
    </Routes>
  )
}
