import { useEffect, useState } from "react";
import { useTenantsStore } from "../../hooks";
import { Tenant } from "../../types";
import { IoMdArrowDropdown } from "react-icons/io";
import { AppDispatch, RootState, setSelectedTenant } from "../../store";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

export const TenantList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedTenant } = useSelector((state: RootState) => state.tenants);
  const { tenants, getTenants, errorMessage } = useTenantsStore();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    getTenants();
  }, []);

  useEffect(() => {
    if (tenants.length && !selectedTenant) {
      dispatch(setSelectedTenant(tenants[0]))
    }
  }, [tenants])

  useEffect(() => {
    if (errorMessage) {
      Swal.fire("Error al cargar los tenants", errorMessage, "error");
    }
  }, [errorMessage]);

  const handleTenantSelect = (tenant: Tenant) => {
    dispatch(setSelectedTenant(tenant));
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!tenants || !Array.isArray(tenants)) {
    return <p>No hay tenants disponibles</p>;
  }

  return (
    <div className="relative">
      {tenants.length === 1 ? (
        <span className="text-gray-700 font-medium">{tenants[0].name}</span>
      ) : (
        <div
          onClick={toggleDropdown}
          className="cursor-pointer text-gray-900 flex items-center hover:text-[#37d7e3] transition-colors"
        >
          <span className="mr-2 capitalize font-semibold">
            {selectedTenant ? selectedTenant.name : tenants[0]?.name}
          </span>
          <IoMdArrowDropdown
            className={`w-4 h-4 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      )}

      {isOpen && tenants.length > 1 && (
        <ul className="fixed z-10 mt-2 bg-white border border-[#37d7e3] rounded-md shadow-lg max-h-60 overflow-y-auto w-full md:w-48">
          {tenants.map((tenant) => (
            <li
              key={tenant._id}
              className="p-2 hover:bg-[#1de7e0]/30 cursor-pointer transition-colors"
              onClick={() => handleTenantSelect(tenant)}
            >
              <div className="flex flex-col">
                <span className="capitalize font-semibold text-gray-800">
                  {tenant.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
