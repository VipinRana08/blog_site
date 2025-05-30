import React from "react";
import {Editor} from "@tinymce/tinymce-react";
import{Controller} from "react-hook-form";
import conf from "../conf/conf";

export default function RTE({name, control, label, defaultValue =""}){
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">
                {label}
            </label>}
            <Controller 
            name={name || "content"}
            control={control}
            render={({field: {onChange}})=>(
                <Editor
                    initialValue={defaultValue}
                    apiKey= {conf.rteKey}
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>
    );
}