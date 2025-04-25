import { FC, Ref, useImperativeHandle } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface FieldOption {
  label: string;
  value: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "checkbox" | "radio";
  placeholder?: string;
  options?: FieldOption[];
  validation?: Record<string, string>;
  allowMultiple?: boolean;
  maxLength?: number
}
export interface ATabsRef {
  resetAllField: () => void;
}

interface ATabsProps {
  title?: string;
  description?: string;
  fields: FormField[];
  onSubmit: SubmitHandler<FieldValues>;
  submitButtonText?: string;
  ref: Ref<ATabsRef>;
}

const ATabs: FC<ATabsProps> = ({
  fields,
  ref,
  onSubmit,
  submitButtonText = "Submit",
}) => {
  const {
    register,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  useImperativeHandle(
    ref,
    () => ({
      resetAllField: () => reset(),
    }),
    []
  );



  return (
    <div className="llg:px-[148px]  md:w-full mo:w-full mo:px-0 mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={`form_${index}`}>
            <div className="bg-[#313131] rounded-[50px] mo:rounded-[30px] flex px-[50px] mo:p-[30px] py-[44px] flex-col mt-5">
              <label className="text-[#FFF] text-[26px] mo:text-base font-medium leading-normal text-left">
                {field.label}
              </label>
              {field.type === "text" && (
                <>
                  <input
                    maxLength={field.maxLength}
                    type="text"
                    className="noBorder  bg-[#313131] border-b border-[#FFFFFF4D] w-full cursor-auto"
                    placeholder={field.placeholder || ""}
                    {...register(field.name, {
                      // required: `${field.label} is required`,
                      // ...(field.validation || {}),
                    })}
                  // onChange={(e) => {
                  //   if (e.target.value.trim() !== "") {
                  //     clearErrors(field.name);
                  //   }
                  // }}
                  />
                  {/* {errors[field.name] && (
                    <span className="text-red-500 text-sm mt-2">
                      {"Please enter"}

                    </span>
                  )} */}
                </>
              )}

              {field.type === "email" && (
                <>
                  <input
                    // type="email"
                    className="noBorder bg-[#313131] border-b border-[#FFFFFF4D] w-full"
                    placeholder={field.placeholder || ""}
                    {...register(field.name, {
                      required: `${field.label} is required`,
                    })}
                    maxLength={field.maxLength}
                    onChange={(e) => {
                      if (e.target.value.trim() !== "") {
                        clearErrors(field.name);
                      }
                    }}
                  />
                  {errors[field.name] && (
                    <span className="text-red-500 text-sm mt-2">
                      Please provide your email
                    </span>
                  )}
                </>
              )}

              {field.type === "textarea" && (
                <>
                  <textarea
                    placeholder={field.placeholder || ""}
                    className="noBorder bg-[#313131] max-h-[200px] border-b border-[#FFFFFF4D] w-full"
                    {...register(field.name, {
                      // required: `${field.label} is required`,
                    })}
                  // onChange={(e) => {
                  //   if (e.target.value.trim() !== "") {
                  //     clearErrors(field.name);
                  //   }
                  // }}
                  />
                </>
              )}

              {field.type === "checkbox" && field.options && (
                <div className="mt-10 flex flex-col gap-5">
                  {field.options.map((option, idx) => {
                    return <label
                      key={`check_${idx}`}
                      htmlFor={`checkbox_${field.name}_${idx}`}
                      className="flex flex-row gap-4 mo:gap-2 items-center cursor-pointer "
                    >
                      <input
                        id={`checkbox_${field.name}_${idx}`}
                        type="checkbox"
                        className="w-6 h-6  custom-checkbox"
                        {...register(field.allowMultiple ? `${field.name}[${idx}]` : field.name, {
                          validate: (value) => {
                            if (!field.allowMultiple) {
                              if (Array.isArray(value)) {
                                return value.length <= 1
                              }
                            }
                            return true;
                          },
                        })}
                        value={option.value}
                        onChange={(e) => {
                          if (!field.allowMultiple) {
                            const inputs = document.getElementsByName(field.name) as NodeListOf<HTMLInputElement>;
                            inputs.forEach((input) => {
                              if (input !== e.target) input.checked = false;
                            });
                          }
                        }}
                      />
                      <div className="checkbox-text text-xl mo:text-base mo:w-[250px]">{option.label}</div>
                    </label>

                  })}
                  {/* {errors[field.name] && (
                    <span className="text-red-500 text-sm mt-2">
                      This option cannot be empty
                    </span>
                  )} */}
                </div>
              )}

              {field.type === "radio" && field.options && (
                <div>
                  {field.options.map((option, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...register(field.name, {
                          required: `${field.label} is required`,
                        })}
                        value={option.value}
                      />
                      {option.label}
                    </label>
                  ))}
                  {errors[field.name] && (
                    <span className="text-red-500 text-sm mt-2">
                      {errors[field.name]?.message as string}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="w-full text-center">
          <button
            type="submit"
            className="bg-[#4281FF] my-[60px] btn items-center mo:!justify-center text-[#FFFFFF] rounded-[33.5px] w-[198px] mo:w-[204px] h-[67px] mo:h-[38px] text-[25px] mo:text-base font-semibold leading-normal"
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ATabs;
