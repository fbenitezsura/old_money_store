import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"
import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { Fragment } from "react"

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const { state, close } = useMobileMenu()
  
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex z-50" onClose={close}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-700 bg-opacity-75 transition-opacity backdrop-blur-sm" />
        </TransitionChild>

        <TransitionChild
          enter="transition ease-in-out duration-500 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-500 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-left flex max-w-full">
              <DialogPanel className="relative w-screen pointer-events-auto bg-white text-gray-900 flex flex-col overflow-y-auto">
                {children}
              </DialogPanel>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition.Root>
  )
}

export default Container
