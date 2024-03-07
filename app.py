from tkinter import *
import customtkinter

root = customtkinter.CTk()

root.geometry("300x400")

button = customtkinter.CTkButton(master=root, text = "Janimal is gay!")

button.place(relx = 0.5, rely = 0.5, anchor=CENTER)

root.mainloop()