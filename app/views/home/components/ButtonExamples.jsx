"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Download,
  Eye,
  MoreVertical,
  Pencil,
  Plus,
  Trash2,
  X,
} from "lucide-react";

export default function ButtonExamples() {
  return (
    <div className="space-y-12 p-8">

      {/* =====================================================
          BUTTON VARIANTS
      ===================================================== */}

      <section className="space-y-5">
        <div>
          <h2 className="text-lg font-semibold text-secondary-900">
            Button Variants
          </h2>

          <p className="text-sm text-secondary-400">
            Primary, secondary, outline and ghost
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">

          {/* Primary */}

          <button className="btn btn-primary">
            Primary
          </button>

          <button className="btn btn-primary btn-sm">
            Primary Small
          </button>

          <button className="btn btn-primary btn-lg">
            Primary Large
          </button>


          {/* Secondary */}

          <button className="btn btn-secondary">
            Secondary
          </button>

          <button className="btn btn-secondary btn-sm">
            Secondary Small
          </button>

          <button className="btn btn-secondary btn-lg">
            Secondary Large
          </button>


          {/* Outline */}

          <button className="btn btn-outline">
            Outline
          </button>

          <button className="btn btn-outline btn-sm">
            Outline Small
          </button>

          <button className="btn btn-outline btn-lg">
            Outline Large
          </button>


          {/* Ghost */}

          <button className="btn btn-ghost">
            Ghost
          </button>

          <button className="btn btn-ghost btn-sm">
            Ghost Small
          </button>

          <button className="btn btn-ghost btn-lg">
            Ghost Large
          </button>

        </div>
      </section>


      {/* =====================================================
          NORMAL ICONS
      ===================================================== */}

      <section className="space-y-5">

        <div>
          <h2 className="text-lg font-semibold text-secondary-900">
            Buttons With Icons
          </h2>

          <p className="text-sm text-secondary-400">
            Normal icons do not need a special class
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">

          {/* Leading */}

          <button className="btn btn-primary">
            <Plus
              size={18}
              className="mr-2"
            />
            Add New
          </button>

          <button className="btn btn-secondary">
            <Download
              size={18}
              className="mr-2"
            />
            Download
          </button>

          <button className="btn btn-outline">
            <Eye
              size={18}
              className="mr-2"
            />
            Preview
          </button>

          <button className="btn btn-ghost">
            <Pencil
              size={17}
              className="mr-2"
            />
            Edit
          </button>


          {/* Trailing */}

          <button className="btn btn-primary">
            Continue
            <ArrowUpRight
              size={18}
              className="ml-2"
            />
          </button>

          <button className="btn btn-secondary">
            Download
            <Download
              size={17}
              className="ml-2"
            />
          </button>

          <button className="btn btn-outline">
            View
            <Eye
              size={17}
              className="ml-2"
            />
          </button>

          <button className="btn btn-ghost">
            Edit
            <Pencil
              size={17}
              className="ml-2"
            />
          </button>

        </div>
      </section>


      {/* =====================================================
          CIRCULAR TRAILING ICON
      ===================================================== */}

      <section className="space-y-5">

        <div>
          <h2 className="text-lg font-semibold text-secondary-900">
            Circular Trailing Icon
          </h2>

          <p className="text-sm text-secondary-400">
            Uses only the .btn-icon class
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">

          <button className="btn btn-primary">
            <span>Book an appointment</span>

            <span className="btn-icon">
              <ArrowUpRight size={18} />
            </span>
          </button>

          <button className="btn btn-secondary">
            <span>Learn More</span>

            <span className="btn-icon">
              <ArrowUpRight size={18} />
            </span>
          </button>

          <button className="btn btn-outline">
            <span>View Details</span>

            <span className="btn-icon">
              <ArrowUpRight size={18} />
            </span>
          </button>

          <button className="btn btn-ghost">
            <span>Explore</span>

            <span className="btn-icon">
              <ArrowUpRight size={17} />
            </span>
          </button>

        </div>

        <div className="flex flex-wrap items-center gap-4">

          <button className="btn btn-primary btn-sm">
            <span>Book Now</span>

            <span className="btn-icon">
              <ArrowUpRight size={15} />
            </span>
          </button>

          <button className="btn btn-primary btn-lg">
            <span>Get Started</span>

            <span className="btn-icon">
              <ArrowUpRight size={20} />
            </span>
          </button>

        </div>
      </section>


      {/* =====================================================
          ICON ONLY
      ===================================================== */}

      <section className="space-y-5">

        <div>
          <h2 className="text-lg font-semibold text-secondary-900">
            Icon Only
          </h2>

          <p className="text-sm text-secondary-400">
            Uses Tailwind utilities directly
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">

          <button
            className="btn btn-primary size-10 px-0"
            aria-label="Add"
          >
            <Plus size={18} />
          </button>

          <button
            className="btn btn-secondary size-10 px-0"
            aria-label="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            className="btn btn-outline size-10 px-0"
            aria-label="View"
          >
            <Eye size={18} />
          </button>

          <button
            className="btn btn-ghost size-10 px-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <button
            className="btn btn-primary size-10 px-0"
            aria-label="Delete"
          >
            <Trash2 size={18} />
          </button>

          <button
            className="btn btn-outline size-10 px-0"
            aria-label="More"
          >
            <MoreVertical size={18} />
          </button>

        </div>
      </section>


      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <section className="space-y-5">

        <div>
          <h2 className="text-lg font-semibold text-secondary-900">
            Actions
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">

          <button className="btn btn-outline">
            <ArrowLeft
              size={17}
              className="mr-2"
            />
            Back
          </button>

          <button className="btn btn-primary">
            Save Changes
            <Check
              size={17}
              className="ml-2"
            />
          </button>

          <button className="btn btn-secondary">
            Cancel
          </button>

          <button className="btn btn-ghost">
            Skip
          </button>

        </div>
      </section>


      {/* =====================================================
          FULL WIDTH
      ===================================================== */}

      <section className="max-w-md space-y-5">

        <h2 className="text-lg font-semibold text-secondary-900">
          Full Width
        </h2>

        <div className="space-y-3">

          <button className="btn btn-primary btn-block">
            Continue
            <ArrowUpRight
              size={18}
              className="ml-2"
            />
          </button>

          <button className="btn btn-secondary btn-block">
            Save Changes
          </button>

          <button className="btn btn-outline btn-block">
            Cancel
          </button>

          <button className="btn btn-ghost btn-block">
            Skip
          </button>

        </div>
      </section>


      {/* =====================================================
          DISABLED
      ===================================================== */}

      <section className="space-y-5">

        <h2 className="text-lg font-semibold text-secondary-900">
          Disabled
        </h2>

        <div className="flex flex-wrap items-center gap-4">

          <button
            className="btn btn-primary"
            disabled
          >
            Primary
          </button>

          <button
            className="btn btn-secondary"
            disabled
          >
            Secondary
          </button>

          <button
            className="btn btn-outline"
            disabled
          >
            Outline
          </button>

          <button
            className="btn btn-ghost"
            disabled
          >
            Ghost
          </button>

        </div>
      </section>


      {/* =====================================================
          SHINE EFFECT
      ===================================================== */}

      <section className="space-y-5">

        <div>
          <h2 className="text-lg font-semibold text-secondary-900">
            Shine Effect
          </h2>

          <p className="text-sm text-secondary-400">
            Optional hover effect
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">

          <button className="btn btn-primary btn-shine">
            Get Started
          </button>

          <button className="btn btn-secondary btn-shine">
            Learn More
          </button>

          <button className="btn btn-outline btn-shine">
            View Details
          </button>

          <button className="btn btn-ghost btn-shine">
            Explore
          </button>

          <button className="btn btn-primary btn-shine">
            <span>Book Appointment</span>

            <span className="btn-icon">
              <ArrowUpRight size={18} />
            </span>
          </button>

        </div>
      </section>

    </div>
  );
}