
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image";

interface PropsI {
    openDialog: boolean;
    setOpenDialog: (opneDialog: boolean) => void;
    image: string;
    title: string;
    body: string;
}

export function DialogCard({ openDialog, setOpenDialog, image, title, body }: PropsI) {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-md bg-blue-2">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className='w-96 h-40 relative my-3'>
                        <Image
                            src={`${image}`}
                            alt='hero image'
                            fill
                            className='object-cover rounded-sm'
                        />
                    </div>
                    <p className="text-[16px] mt-2">
                        {body}
                    </p>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
