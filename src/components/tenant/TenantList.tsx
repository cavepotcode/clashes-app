import { useEffect, useRef, useState } from "react";
import { useTenantsStore } from "../../hooks";
import { Tenant } from "../../types";
import { IoIosAdd, IoMdArrowDropdown } from "react-icons/io";
import {
  AppDispatch,
  RootState,
  setSelectedPage,
  setSelectedTenant,
} from "../../store";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { useAuthStore } from '../../hooks';

export const TenantList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedTenant } = useSelector((state: RootState) => state.tenants);
  const { tenants, getTenants, errorMessage } = useTenantsStore();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useAuthStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTenants();
  }, []);

  useEffect(() => {
    if (tenants.length && !selectedTenant) {
      dispatch(setSelectedTenant(tenants[0]));
    }
  }, [tenants]);

  useEffect(() => {
    if (errorMessage) {
      Swal.fire("Error al cargar los tenants", errorMessage, "error");
    }
  }, [errorMessage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleEditTenant = (tenant: Tenant) => {
    dispatch(setSelectedTenant(tenant));
    dispatch(setSelectedPage("settings"));
    setIsOpen(false);
  };

  const handleTenantSelect = (tenant: Tenant) => {
    dispatch(setSelectedTenant(tenant));
    setIsOpen(false);
  };

  const handleNewTenant = () => {
    dispatch(setSelectedPage("createTenant"));
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!tenants || !Array.isArray(tenants)) {
    return <p>No hay tenants disponibles</p>;
  }

  return (
    <div ref={dropdownRef} className="relative">
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
        <ul className="md:fixed absolute flex flex-col z-10 mt-2 bg-white border border-[#37d7e3] rounded-md shadow-lg max-h-60 overflow-y-auto scrollbar-thin md:w-auto">
          {tenants.map((tenant) => (
            <li
              key={tenant._id}
              className="p-2 hover:bg-[#1de7e0]/30 cursor-pointer transition-colors flex items-center justify-between"
              onClick={() => handleTenantSelect(tenant)}
            >
              <div className="flex flex-col">
                <span className="capitalize font-semibold text-gray-800">
                  {tenant.name}
                </span>
              </div>
              <FaEdit
                onClick={() => handleEditTenant(tenant)}
                className="ml-3 text-gray-500 hover:text-black cursor-pointer"
              />
            </li>
          ))}
          {user?.role === "super_admin" && (
            <li
              onClick={() => handleNewTenant()}
              className="py-2 px-3 hover:bg-[#1de7e0] cursor-pointer transition-colors flex items-center justify-between border-t-2 sticky bottom-0 bg-white"
            >
              <IoIosAdd className="text-black cursor-pointer size-5 mr-2" />
              <span className="capitalize text-black">Nuevo Tenant</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
