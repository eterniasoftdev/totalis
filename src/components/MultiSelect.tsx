import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, X } from "lucide-react";

interface MultiSelectProps {
  options: string[];
  placeholder: string;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  disabled?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder,
  selectedValues,
  onChange,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((value) => value !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  const removeValue = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    onChange(selectedValues.filter((value) => value !== option));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        className={`flex flex-wrap min-h-12 px-4 py-2 border rounded-lg bg-white cursor-pointer ${
          isOpen ? "border-blue-500 shadow-md" : "border-gray-300"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        {selectedValues.length === 0 ? (
          <span className="text-gray-500 py-1">{placeholder}</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selectedValues.map((value) => (
              <div
                key={value}
                className="flex items-center px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-sm animate-fadeIn"
              >
                {value}
                <button
                  onClick={(e) => removeValue(e, value)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                  disabled={disabled}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="ml-auto flex items-center">
          <ChevronDown
            size={20}
            className={`text-gray-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 max-h-60 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg animate-slideDown">
          {options.length > 0 ? (
            options.map((option) => (
              <div
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center ${
                  selectedValues.includes(option) ? "bg-blue-50" : ""
                }`}
                onClick={() => toggleOption(option)}
              >
                <div
                  className={`w-4 h-4 mr-2 border rounded flex items-center justify-center ${
                    selectedValues.includes(option)
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedValues.includes(option) && (
                    <Check size={12} className="text-white" />
                  )}
                </div>
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
