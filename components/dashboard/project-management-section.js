"use client"
import { useState } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/styles"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit2, Trash2, X, MapPin, Upload } from "lucide-react"

export function ProjectManagementSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const [projects, setProjects] = useState([
    {
      id: "1",
      titleEn: "Riviera Towers",
      titleAr: "أبراج ريفييرا",
      locationEn: "Dubai Marina",
      locationAr: "دبي مارينا",
      descriptionEn:
        "Experience waterfront luxury living with breathtaking views.",
      descriptionAr: "استمتع بحياة فاخرة على الواجهة البحرية مع إطلالات خلابة.",
      category: "residential",
      status: "completed",
      units: "250 Units",
      completionDate: "2023",
      image: "/luxury-tower-waterfront.jpg",
      secondaryImages: []
    }
  ])

  const [isAddingProject, setIsAddingProject] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    id: "",
    titleEn: "",
    titleAr: "",
    locationEn: "",
    locationAr: "",
    descriptionEn: "",
    descriptionAr: "",
    category: "residential",
    status: "underConstruction",
    units: "",
    completionDate: "",
    image: "",
    secondaryImages: []
  })

  const [mainImageFile, setMainImageFile] = useState(null)
  const [secondaryImageFiles, setSecondaryImageFiles] = useState([])

  const handleDelete = id => {
    setProjects(projects.filter(p => p.id !== id))
  }

  const handleEdit = project => {
    setEditingProject(project.id)
    setFormData(project)
    setIsAddingProject(true)
  }

  const handleMainImageChange = e => {
    const file = e.target.files?.[0]
    if (file) {
      setMainImageFile(file)
      // Create preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSecondaryImagesChange = e => {
    const files = e.target.files
    if (files) {
      const fileArray = Array.from(files)
      setSecondaryImageFiles([...secondaryImageFiles, ...fileArray])

      // Create preview URLs for all files
      fileArray.forEach(file => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            secondaryImages: [...prev.secondaryImages, reader.result]
          }))
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleRemoveSecondaryImage = index => {
    setSecondaryImageFiles(secondaryImageFiles.filter((_, i) => i !== index))
    setFormData({
      ...formData,
      secondaryImages: formData.secondaryImages.filter((_, i) => i !== index)
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (editingProject) {
      setProjects(projects.map(p => (p.id === editingProject ? formData : p)))
    } else {
      setProjects([...projects, { ...formData, id: Date.now().toString() }])
    }
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      id: "",
      titleEn: "",
      titleAr: "",
      locationEn: "",
      locationAr: "",
      descriptionEn: "",
      descriptionAr: "",
      category: "residential",
      status: "underConstruction",
      units: "",
      completionDate: "",
      image: "",
      secondaryImages: []
    })
    setMainImageFile(null)
    setSecondaryImageFiles([])
    setIsAddingProject(false)
    setEditingProject(null)
  }

  return (
    <div className="mb-12">
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-primary">
              {t.manageProjects}
            </CardTitle>
            {!isAddingProject && (
              <Button
                onClick={() => setIsAddingProject(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                {isRTL ? "إضافة مشروع" : "Add Project"}
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* Add/Edit Form */}
          {isAddingProject && (
            <Card className="mb-6 border-primary/20 bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {editingProject
                      ? isRTL
                        ? "تعديل المشروع"
                        : "Edit Project"
                      : isRTL
                      ? "مشروع جديد"
                      : "New Project"}
                  </h3>
                  <Button variant="ghost" size="sm" onClick={resetForm}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* English Title */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "العنوان (إنجليزي)" : "Title (English)"}
                      </label>
                      <Input
                        value={formData.titleEn}
                        onChange={e =>
                          setFormData({ ...formData, titleEn: e.target.value })
                        }
                        placeholder="Enter English title"
                        required
                      />
                    </div>
                    {/* Arabic Title */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "العنوان (عربي)" : "Title (Arabic)"}
                      </label>
                      <Input
                        value={formData.titleAr}
                        onChange={e =>
                          setFormData({ ...formData, titleAr: e.target.value })
                        }
                        placeholder="أدخل العنوان بالعربي"
                        required
                        dir="rtl"
                      />
                    </div>
                    {/* English Location */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "الموقع (إنجليزي)" : "Location (English)"}
                      </label>
                      <Input
                        value={formData.locationEn}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            locationEn: e.target.value
                          })
                        }
                        placeholder="Enter English location"
                        required
                      />
                    </div>
                    {/* Arabic Location */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "الموقع (عربي)" : "Location (Arabic)"}
                      </label>
                      <Input
                        value={formData.locationAr}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            locationAr: e.target.value
                          })
                        }
                        placeholder="أدخل الموقع بالعربي"
                        required
                        dir="rtl"
                      />
                    </div>
                  </div>

                  {/* English Description */}
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      {isRTL ? "الوصف (إنجليزي)" : "Description (English)"}
                    </label>
                    <Textarea
                      value={formData.descriptionEn}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          descriptionEn: e.target.value
                        })
                      }
                      placeholder="Enter English description"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Arabic Description */}
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      {isRTL ? "الوصف (عربي)" : "Description (Arabic)"}
                    </label>
                    <Textarea
                      value={formData.descriptionAr}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          descriptionAr: e.target.value
                        })
                      }
                      placeholder="أدخل الوصف بالعربي"
                      rows={3}
                      required
                      dir="rtl"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Category */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "الفئة" : "Category"}
                      </label>
                      <Select
                        value={formData.category}
                        onValueChange={value =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">
                            {t.residential}
                          </SelectItem>
                          <SelectItem value="commercial">
                            {t.commercial}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Status */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "الحالة" : "Status"}
                      </label>
                      <Select
                        value={formData.status}
                        onValueChange={value =>
                          setFormData({ ...formData, status: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="completed">
                            {t.completed}
                          </SelectItem>
                          <SelectItem value="underConstruction">
                            {t.underConstruction}
                          </SelectItem>
                          <SelectItem value="launching">
                            {t.launching}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Completion Date */}
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        {isRTL ? "سنة الإنجاز" : "Completion Year"}
                      </label>
                      <Input
                        value={formData.completionDate}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            completionDate: e.target.value
                          })
                        }
                        placeholder="2024"
                        required
                      />
                    </div>
                  </div>

                  {/* Units */}
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      {isRTL ? "عدد الوحدات" : "Number of Units"}
                    </label>
                    <Input
                      value={formData.units}
                      onChange={e =>
                        setFormData({ ...formData, units: e.target.value })
                      }
                      placeholder="250 Units"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      {isRTL ? "الصورة الرئيسية" : "Main Image"}
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleMainImageChange}
                          className="hidden"
                          id="main-image-upload"
                        />
                        <label
                          htmlFor="main-image-upload"
                          className="flex items-center gap-2 px-4 py-2 border-2 border-primary/20 rounded-md cursor-pointer hover:bg-primary/5 transition-colors"
                        >
                          <Upload className="w-4 h-4 text-primary" />
                          <span className="text-sm">
                            {isRTL ? "اختر صورة" : "Choose Image"}
                          </span>
                        </label>
                        {mainImageFile && (
                          <span className="text-sm text-muted-foreground">
                            {mainImageFile.name}
                          </span>
                        )}
                      </div>
                      {formData.image && (
                        <div className="relative w-full h-48">
                          <img
                            src={formData.image || "/placeholder.svg"}
                            alt="Main preview"
                            className="w-full h-full object-cover rounded-lg border border-primary/20"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      {isRTL ? "الصور الثانوية" : "Secondary Images"}
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleSecondaryImagesChange}
                          className="hidden"
                          id="secondary-images-upload"
                        />
                        <label
                          htmlFor="secondary-images-upload"
                          className="flex items-center gap-2 px-4 py-2 border-2 border-primary/20 rounded-md cursor-pointer hover:bg-primary/5 transition-colors"
                        >
                          <Upload className="w-4 h-4 text-primary" />
                          <span className="text-sm">
                            {isRTL
                              ? "اختر صور متعددة"
                              : "Choose Multiple Images"}
                          </span>
                        </label>
                        {secondaryImageFiles.length > 0 && (
                          <span className="text-sm text-muted-foreground">
                            {secondaryImageFiles.length}{" "}
                            {isRTL ? "صور" : "images"}
                          </span>
                        )}
                      </div>
                      {formData.secondaryImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {formData.secondaryImages.map((img, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={img || "/placeholder.svg"}
                                alt={`Secondary ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border border-primary/20"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() =>
                                  handleRemoveSecondaryImage(index)
                                }
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                      {formData.secondaryImages.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                          {isRTL
                            ? "لم يتم إضافة صور ثانوية بعد"
                            : "No secondary images added yet"}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90"
                    >
                      {editingProject
                        ? t.saveChanges
                        : isRTL
                        ? "إضافة المشروع"
                        : "Add Project"}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      {t.cancel}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Projects Grid */}
          <div className="space-y-4">
            {projects.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                {isRTL ? "لا توجد مشاريع بعد" : "No projects yet"}
              </div>
            ) : (
              projects.map(project => (
                <Card
                  key={project.id}
                  className="border-primary/20 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-auto relative flex-shrink-0">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.titleEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-primary text-primary-foreground">
                              {t[project.status]}
                            </Badge>
                            <Badge variant="outline">
                              {t[project.category]}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {isRTL ? project.titleAr : project.titleEn}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm">
                              {isRTL ? project.locationAr : project.locationEn}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/70 mb-3">
                            {isRTL
                              ? project.descriptionAr
                              : project.descriptionEn}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="text-foreground/70">
                              <span className="font-semibold">
                                {isRTL ? "الوحدات:" : "Units:"}
                              </span>{" "}
                              {project.units}
                            </span>
                            <span className="text-foreground/70">
                              <span className="font-semibold">
                                {isRTL ? "الإنجاز:" : "Completion:"}
                              </span>{" "}
                              {project.completionDate}
                            </span>
                            {project.secondaryImages.length > 0 && (
                              <span className="text-foreground/70">
                                <span className="font-semibold">
                                  {isRTL ? "الصور:" : "Images:"}
                                </span>{" "}
                                {project.secondaryImages.length}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(project)}
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(project.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
