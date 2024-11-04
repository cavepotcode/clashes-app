import { FC, FormEvent, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useForm, useTenantsStore } from "../../hooks";
import { TenantData } from "../../types";
import Swal from "sweetalert2";

const tenantFormFields: TenantData = {
  name: "",
  status: "ACTIVE",
  terms: "",
  ranking: false,
  theme: {
    background: "#ffffff",
    card: "#ffffff",
    matchesBackground: "#ffffff",
    details: "#000000",
    title: "#000000",
    menu: "#ffffff",
    one: "#ffffff",
    two: "#ffffff",
    groupTexts: "#000000",
    text: "#000000",
  },
};

export const CreateTenantForm: FC = () => {
  const { createTenant, errorMessage } = useTenantsStore();
  const [activeColorPicker, setActiveColorPicker] = useState<
    keyof TenantData["theme"] | null
  >(null);
  const { formState, onInputChange, onResetForm, isFormValid, setFormState } =
    useForm(tenantFormFields);

  const fieldThemeNames = {
    background: "background",
    card: "card",
    matchesBackground: "matches background",
    details: "details",
    title: "title",
    menu: "menu",
    one: "one",
    two: "two",
    groupTexts: "group texts",
    text: "text",
  };

  useEffect(() => {
    if (errorMessage) {
      Swal.fire(
        "El usuario no tiene permisos para realizar esta acción",
        errorMessage,
        "error"
      );
    }
  }, [errorMessage]);

  const handleColorChange = (color: string, key: keyof TenantData["theme"]) => {
    setFormState({
      ...formState,
      theme: {
        ...formState.theme,
        [key]: color,
      },
    });
  };

  const handleCheckboxChange = () => {
    setFormState((state) => ({
      ...state,
      ranking: !state.ranking,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    await createTenant(formState);
    Swal.fire({
      icon: "success",
      title: "¡Tenant creado!",
      text: "El tenant se ha creado exitosamente.",
    });
    onResetForm();
  };

  return (
    <div className="flex justify-center w-full md:h-fit max-h-min overflow-y-autoauto">
      <form
        onSubmit={onSubmit}
        className="flex flex-col p-4 bg-white shadow-md rounded-md mx-2"
      >
        <h2 className="text-lg font-semibold mb-4">Crear Nuevo Tenant</h2>

        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">
            Nombre del Tenant
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={onInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Términos</label>
          <input
            name="terms"
            value={formState.terms}
            onChange={onInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4 flex">
          <label className="mr-2 text-sm font-medium">Ranking</label>
          <input
            type="checkbox"
            name="ranking"
            checked={formState.ranking}
            onChange={handleCheckboxChange}
            className="h-5 w-5"
          />
        </div>

        <h3 className="text-sm font-medium mt-4">Colores</h3>
        <div className="flex flex-wrap gap-4 mt-4">
          {Object.keys(formState.theme).map((colorKey) => (
            <div
              key={colorKey}
              className="relative flex flex-col items-center w-full md:flex-1 md:basis-1/6"
            >
              <label className="text-xs font-medium mb-1 capitalize">
                {fieldThemeNames[colorKey as keyof typeof fieldThemeNames]}
              </label>
              <input
                type="text"
                readOnly
                value={formState.theme[colorKey as keyof TenantData["theme"]]}
                onClick={() =>
                  setActiveColorPicker(colorKey as keyof TenantData["theme"])
                }
                className="p-2 border rounded w-full cursor-pointer text-center"
              />
              {activeColorPicker === colorKey && (
                <div className="absolute bottom-full mt-2 z-10 bg-white border p-2 rounded shadow-lg">
                  <button
                    onClick={() => setActiveColorPicker(null)}
                    className="mb-2 px-2 py-1 bg-black text-white rounded-xl"
                  >
                    Confirmar
                  </button>
                  <HexColorPicker
                    color={
                      formState.theme[colorKey as keyof TenantData["theme"]]
                    }
                    onChange={(color) =>
                      handleColorChange(
                        color,
                        colorKey as keyof TenantData["theme"]
                      )
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 h-fit w-fit bg-black text-white p-2 rounded hover:hover:bg-[#37d7e3]"
          disabled={!isFormValid}
        >
          Crear Tenant
        </button>
      </form>
    </div>
  );
};
