using DAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class PhuHuynh_Messager_BLL
    {
        private readonly PhuHuynh_Messager_DAL _dal;

        public PhuHuynh_Messager_BLL(PhuHuynh_Messager_DAL dal)
        {
            _dal = dal;
        }

        public List<Messages> GetAll(out string error)
        {
            return _dal.GetAllMessages(out error);
        }

        public Messages GetById(int id, out string error)
        {
            return _dal.GetMessagesById(id, out error);
        }

        public bool CreateMessages(Messages messages, out string error)
        {
            if (string.IsNullOrWhiteSpace(messages.Content))
            {
                error = "Content is required";
                return false;
            }

            return _dal.InsertMessages(messages, out error);
        }
        public bool UpdateMessages(int id, Messages messages, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid messages id";
                return false;
            }

            if (string.IsNullOrWhiteSpace(messages.Content))
            {
                error = "Content is required";
                return false;
            }

            messages.MessageID = id;

            return _dal.UpdateMessages(messages, out error);
        }
    }
}
