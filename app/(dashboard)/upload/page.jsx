"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import ImageUploader from "@/utils/fileuploader";
import Image from "next/image";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Data from "@/utils/techSkills.json";

export default function page() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Category, setCategory] = useState("");

  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [type, setType] = useState("");

  const FileHandler = async (e) => {
    try {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const imageData = await ImageUploader(selectedFile);
        setImage(imageData);
      }
    } catch (error) {
      console.error("Error handling file", error);
    }
  };

  const hanldeUpload = async (passedId) => {
    if (type == "put") {
      await axios.put("/api/techstack", {
        Name: name,
        Description: description,
        Icon: image,
        id: id,
        Category,
      });
      toast.success("Updated");
      setOpen(!open);
      setId("");
    } else if (passedId) {
      await axios.patch("/api/techstack", {
        id: passedId,
      });
      setId("");
      toast.success("Skill Deleted");
    } else if (type == "post") {
      await axios.post("/api/techstack", {
        Name: name,
        Description: description,
        Icon: image,
        Category,
      });
      toast.success("Skill added");
      setOpen(!open);
    }
  };

  const options = [
    "All",
    "Frontend",
    "Backend",
    "Programming",
    "App",
    "CSS/UI library",
    "DevOps",
    "Database",
    "Others",
  ];

  return (
    <div className="group mt-4">
      <Toaster />
      {/* modal  */}
      <div
        className={`min-h-[500px] ${
          open ? "scale-100 duration-100" : "scale-0 duration-100"
        }   h-fit  flex flex-col gap-4 border border-[#302020] rounded-lg bg-[#191919] shadow-sm fixed top-0 left-0 right-0 bottom-0 m-auto w-[40%] p-10`}
      >
        {image ? (
          <Image
            src={image}
            width={1000}
            height={1000}
            className="w-20 m-auto"
          />
        ) : (
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                onChange={(e) => FileHandler(e)}
              />
            </label>
          </div>
        )}
        <button onClick={() => setImage("")} className="m-auto block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        <select
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-[#6d6e70] bg-transparent rounded-lg w-full px-1 py-1 focus:outline-0 text-white text-sm"
        >
          <option value="" disabled>
            Select a category...
          </option>
          {/* Add your options here */}
          {options?.map((data) => (
            <option className="" value={data}>
              {data}
            </option>
          ))}
          {/* Add more options as needed */}
        </select>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
          className="border-2  border-[#6d6e70] bg-transparent rounded-lg w-full px-1 py-1 focus:outline-0 text-white text-sm"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description..."
          className="border-2  border-[#6d6e70] bg-transparent rounded-lg w-full px-1 py-1 focus:outline-0 text-white text-sm"
        />
        <div className="flex gap-10 mt-4">
          <button
            onClick={() => hanldeUpload()}
            className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-[14px] max-md:text-[10px]  border-[#9597f7]  bg-[#e72b2b]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
      {/* table  */}
      <div>
        <div className="border-b-[1px] w-full   border-[#302020] shadow-xl py-4">
          <button
            onClick={() => {
              setOpen(true);
              setType("post");
            }}
            className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
          >
            Add new
          </button>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-10">
          {Data?.map((data, index) => (
            <div
              key={index}
              className=" text-white border-[1px] w-full   border-[#302020] p-10 rounded-xl"
            >
              <div className="flex justify-end gap-2 items-end ">
                {/* edit button  */}
                <button
                  onClick={() => {
                    setId(data?.id);
                    setName(data?.Name);
                    setDescription(data?.Description);
                    setImage(data?.Icon);
                    setOpen(true);
                    setCategory(data?.Category);
                    setType("put");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                {/* delete button  */}
                <button
                  onClick={() => {
                    hanldeUpload(data?.id);
                    setId(data?.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div>
                {" "}
                <Image
                  src={data?.Icon}
                  width={1000}
                  height={1000}
                  className="w-20"
                />
                <p className="font-semibold text-white mt-4">{data?.Name}</p>
                <p className="text-sm mt-1">{data?.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
