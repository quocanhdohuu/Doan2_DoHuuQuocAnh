using DAL;
using Models;
using System;
using System.Collections.Generic;

namespace BLL
{
    public class Admin_EventsBLL
    {
        private readonly Admin_EventsDAL _dal;

        public Admin_EventsBLL(Admin_EventsDAL dal)
        {
            _dal = dal;
        }

        public List<Events> GetAll(out string error)
        {
            return _dal.GetAllEvents(out error);
        }

        public Events GetById(int id, out string error)
        {
            return _dal.GetEventById(id, out error);
        }

        public bool CreateEvent(Events ev, out string error)
        {
            if (string.IsNullOrWhiteSpace(ev.Title))
            {
                error = "Title is required";
                return false;
            }

            if (ev.EventDate == default)
            {
                error = "EventDate is required";
                return false;
            }

            return _dal.InsertEvent(ev, out error);
        }

        public bool UpdateEvent(Events ev, out string error)
        {
            if (ev.EventID <= 0)
            {
                error = "Invalid event id";
                return false;
            }

            if (string.IsNullOrWhiteSpace(ev.Title))
            {
                error = "Title is required";
                return false;
            }

            return _dal.UpdateEvent(ev, out error);
        }
        public bool DeleteEvent(int id, out string error)
        {
            if (id <= 0)
            {
                error = "Invalid event id";
                return false;
            }

            return _dal.DeleteEvent(id, out error);
        }
        public int GetTotalEvents(out string error)
        {
            return _dal.GetTotalEvents(out error);
        }

        public int GetUpcomingEvents(out string error)
        {
            return _dal.GetUpcomingEvents(out error);
        }
    }
}