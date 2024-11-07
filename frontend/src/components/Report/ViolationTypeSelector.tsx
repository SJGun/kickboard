import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useReportStore } from '../../store/ReportInfoStore';

const ViolationTypeSelector: React.FC = () => {
  const { violationType, setViolationType } = useReportStore();

  const handleOptionClick = (option: string) => {
    setViolationType(option);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <Menu as="div" className="relative inline-block w-full text-left">
          <div className="w-full">
            <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {violationType ? violationType : '위반 유형을 선택하세요'}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => handleOptionClick('Account settings')}
                    className={`block px-4 py-2 text-sm ${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    Account settings
                  </div>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => handleOptionClick('Support')}
                    className={`block px-4 py-2 text-sm ${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    Support
                  </div>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <div
                    onClick={() => handleOptionClick('License')}
                    className={`block px-4 py-2 text-sm ${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    License
                  </div>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </>
  );
};

export default ViolationTypeSelector;
