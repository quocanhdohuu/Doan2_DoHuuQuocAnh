using BLL;
using DAL.Helper;
using DAL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddScoped<DatabaseHelper>();
builder.Services.AddScoped<UsersDAL>();
builder.Services.AddScoped<UsersBLL>();
builder.Services.AddScoped<Teacher_StudentsDAL>();
builder.Services.AddScoped<Teacher_StudentsBLL>();
builder.Services.AddScoped<Teacher_ScoreDAL>();
builder.Services.AddScoped<Teacher_ScoreBLL>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
