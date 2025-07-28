import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useAuth from '../../hook/useAuth'
import LoadingSpner from '../LoadingSpner'
import { QueryClient, useMutation } from '@tanstack/react-query'
import useAxiousSecure from '../../hook/useAxiosSecure'
import toast from 'react-hot-toast'

export default function DonateModal({ onClose, isOpen, id }) {
  const axiosInstance = useAxiousSecure()
  const { user, loading } = useAuth()
  const queryClient = new QueryClient()

  const { mutate } = useMutation({
    mutationFn: async ({ donationData, id }) => {
      const { data } = await axiosInstance.patch(`/confrim-find-donner/${id}`, { donationData })
      return data
    },
    onSuccess: (data) => {
      if (data) {
        toast.success("Donation in progress")
        onClose() // Close modal after success
         queryClient.invalidateQueries({ queryKey: ['donationDeatils'] })
      }
    },
    onError: (err) => {
      toast.error(err.message)
      console.log(err.message)
    }
  })

  const handleDonation = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const donationData = Object.fromEntries(formData.entries())
    donationData.donation_status = "inprogress"
    mutate({ donationData, id })
  }

  if (loading) return <LoadingSpner />

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/* Modal Panel */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              leave="ease-in duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded bg-[#D25D5D] p-6 shadow-xl">
                <Dialog.Title as="h3" className="text-3xl font-bold text-white mb-4">
                  De A Donner
                </Dialog.Title>

                <form onSubmit={handleDonation}>
                  <fieldset className="mb-4">
                    <label className="block text-white text-sm mb-1">Donor Name</label>
                    <input
                      type="text"
                      name="donner_name"
                      value={user?.displayName || ''}
                      readOnly
                      required
                      className="w-full p-3 border-b-2 border-gray-500 bg-white text-gray-800 outline-none"
                    />
                  </fieldset>

                  <fieldset className="mb-4">
                    <label className="block text-white text-sm mb-1">Donor Email</label>
                    <input
                      type="email"
                      name="donner_email"
                      value={user?.email || ''}
                      readOnly
                      required
                      className="w-full p-3 border-b-2 border-gray-500 bg-white text-gray-800 outline-none"
                    />
                  </fieldset>

                  <div className="mt-6 flex justify-between">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#fcc6c6] text-gray-700 rounded shadow hover:bg-[#fdaaaa]"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 bg-black/40 text-white rounded shadow hover:bg-black/60"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
