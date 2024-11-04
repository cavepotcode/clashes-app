import { useSelector } from "react-redux";
import { CreateTenantForm, TournamentList } from "../../components";
import { RootState } from "../../store";

export const AdminDashboard = () => {
  const selectedPage = useSelector(
    (state: RootState) => state.navigation.selectedPage
  );

  return (
    <div className="flex flex-1 w-full min-h-[calc(100vh-60px)] p-4 overflow-auto">
      {selectedPage === "tournaments" && <TournamentList />}
      {selectedPage === "settings" && <CreateTenantForm />}
    </div>
  );
};
