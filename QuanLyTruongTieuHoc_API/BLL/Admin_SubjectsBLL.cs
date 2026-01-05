using DAL;
using Models;
using System.Collections.Generic;

namespace BLL
{
    public class Admin_SubjectsBLL
    {
        private readonly Admin_SubjectsDAL _dal;

        public Admin_SubjectsBLL(Admin_SubjectsDAL dal)
        {
            _dal = dal;
        }
        public List<Subjects> GetAllSubjects(out string error)
        {
            return _dal.GetAllSubjects(out error);
        }
        public List<Subjects> GetAllName(out string error)
            => _dal.GetAllName(out error);

        public Subjects GetNameByID(int id, out string error)
            => _dal.GetNameByID(id, out error);

        public bool Create(Subjects s, out string error)
            => _dal.Insert(s, out error);

        public bool Update(int id, Subjects s, out string error)
        {
            s.SubjectID = id;
            return _dal.Update(s, out error);
        }

        public bool Delete(int id, out string error)
            => _dal.Delete(id, out error);
    }
}
