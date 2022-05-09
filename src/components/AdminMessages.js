import React, { useState } from 'react';
import { GET_ALL_MESSAGES } from '../graphql/queries';
import { UPDATE_MESSAGE_MUTATION } from '../graphql/mutations';
import { useQuery, useMutation } from '@apollo/client';
import Loading from './Loading';
import 'tw-elements';

const AdminMessages = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_MESSAGES);
  const [updateMessage] = useMutation(UPDATE_MESSAGE_MUTATION);
  const [view, setView] = useState({
    content: '',
    email: '',
  });

  const toggleRead = async (check, id) => {
    console.log(check, id);
    let read;
    try {
      if (check === 'no') {
        read = 'yes';
      } else if (check === 'yes') {
        read = 'no';
      } else {
        read = 'yes';
      }

      if (read) {
        const { data } = await updateMessage({
          variables: {
            input: {
              id: id,
              read: read,
            },
          },
        });
        console.log('updated', data);
      }
    } catch (error) {
      console.error('didnt update status of message', error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="h-screen bg-white">
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <div className="modal">
        <div class="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{view.email}</h3>
          <p className="py-4">{view.content}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Read
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Content
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    {/* <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      View
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {data
                    ? data.messages.map((message) => {
                        let check;
                        if (message.read === 'no') {
                          check = '';
                        } else if (
                          message.read === 'yes' ||
                          message.read === 'save'
                        ) {
                          check = 'checked';
                        }

                        return (
                          <tr
                            key={message.id}
                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td
                              key={message.id}
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                              <input
                                type="checkbox"
                                checked={check}
                                className="checkbox"
                                onChange={() =>
                                  toggleRead(message.read, message.id)
                                }
                              />
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap line-clamp-1">
                              {message.content}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {message.email}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <label
                                htmlFor="my-modal-4"
                                className="btn modal-button"
                                onClick={() =>
                                  setView({
                                    content: message.content,
                                    email: message.email,
                                  })
                                }
                              >
                                open modal
                              </label>
                            </td>
                          </tr>
                        );
                      })
                    : 'currently no messages'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Mark
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Otto
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @mdo
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Jacob
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Thornton
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @fat
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td
                      colspan="2"
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                    >
                      Larry the Bird
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      @twitter
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminMessages;
