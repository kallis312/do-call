import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { ComponentProps, ComponentRef, Fragment, useRef, useState } from 'react'

const people = [
  { name: 'エリア名称' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
  { name: 'サンプルエリア' },
]

const Select = (props: ComponentProps<'div'>) => {
  const parentRef = useRef<ComponentRef<'div'>>(null)
  const [selected, setSelected] = useState(people[0])
  return (
    <div className={props.className}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-full" ref={parentRef}>
          <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options style={{ width: parentRef.current?.clientWidth }} className="fixed mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10 ">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-left pl-2 ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Select