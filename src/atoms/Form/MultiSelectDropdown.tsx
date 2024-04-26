import React, { useState, useEffect, useRef } from "react";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
  onChange: (selectedOptions: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (value: string) => {
    const newSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={
            "flex  w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-100 text-sm leading-5 font-medium text-gray-700 shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-50 active:text-gray-800" +
            ` ${
              selectedOptions.length
                ? "flex-wrap"
                : "justify-between items-center"
            }`
          }
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOptions.length === 0 ? (
            <span>Select options</span>
          ) : (
            selectedOptions.map((option) => (
              <span
                key={option}
                className="flex flex-row h-8 items-center bg-gray-300 px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 mr-1 my-1"
              >
                {options.find((o) => o.value === option)?.label}
                <svg
                  className="ml-1.5 h-4 w-4 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  onClick={() => handleOptionChange(option)}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm4.293 12.707a1 1 0 1 1-1.414 1.414L10 11.414l-3.879 3.879a1 1 0 1 1-1.414-1.414L8.586 10 4.707 6.121a1 1 0 1 1 1.414-1.414L10 8.586l3.879-3.879a1 1 0 0 1 1.414 1.414L11.414 10l3.879 3.879z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ))
          )}
          <svg
            className="-mr-1 ml-auto h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4l-8 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="w-full origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center px-4 py-2"
                role="menuitem"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionChange(option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
