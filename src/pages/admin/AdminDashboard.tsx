import { useSelector } from "react-redux";
import { TenantForm, TournamentList } from "../../components";
import { RootState } from "../../store";

export const AdminDashboard = () => {
  const selectedPage = useSelector(
    (state: RootState) => state.navigation.selectedPage
  );
  const selectedTenant = useSelector(
    (state: RootState) => state.tenants.selectedTenant
  );

  return (
    <div className="flex flex-1 w-full min-h-[calc(100vh-60px)] p-4 overflow-auto">
      {selectedPage === "tournaments" && <TournamentList />}
      {selectedPage === "createTenant" && <TenantForm />}
      {selectedPage === "settings" && <TenantForm tenantToEdit={selectedTenant} />}
    </div>
  );
};
