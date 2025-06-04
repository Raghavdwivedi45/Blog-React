const FormTop = ({formInfo, handler}) => {
    return (
        <div className="submajor-form-group submajor-fg-top">
            <div className="submajor-fg-top1">
                <label htmlFor="idx">Chapter</label>
                <input
                    type="number" id="idx" name="idx" min="0"
                    value={formInfo.idx}
                    onChange={handler}
                    required placeholder="Enter Chapter Number"
                />
            </div>
            <div className="submajor-fg-top2">
                <label htmlFor="title">Title</label>
                <input
                    type="text" id="title" name="title"
                    value={formInfo.title}
                    onChange={handler}
                    required placeholder="Enter title"
                />
            </div>
        </div>
    )
}

export default FormTop