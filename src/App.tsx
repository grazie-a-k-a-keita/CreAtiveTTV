import { AudioLines } from 'lucide-react';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { Slider } from './components/ui/slider';
import { Textarea } from './components/ui/textarea';

function App() {
  const [speechText, setSpeechText] = useState<string>('');
  const [speechPitch, setSpeechPitch] = useState<number>(1);
  const [speechRate, setSpeechRate] = useState<number>(1);
  const [speechVolume, setSpeechVolume] = useState<number>(1);

  const speech = () => {
    const speechSynthesisUtterance = new SpeechSynthesisUtterance(speechText);

    /**
     * lang: japan
     */
    speechSynthesisUtterance.lang = 'ja-JP';
    /**
     * pitch: 0 ~ 2
     *
     * default: 1
     */
    speechSynthesisUtterance.pitch = speechPitch;
    /**
     * rate: 0.1 ~ 10
     *
     * default: 1
     */
    speechSynthesisUtterance.rate = speechRate;
    /**
     * volume: 0 ~ 1
     *
     * default: 1
     */
    speechSynthesisUtterance.volume = speechVolume;

    window.speechSynthesis.speak(speechSynthesisUtterance);
    speechSynthesisUtterance.onerror = () => {
      alert('申し訳ありません、音声合成に失敗しました。\n更新して再度行うか、別のブラウザで試してみてください。');
    };
  };

  return (
    <div className='flex min-h-dvh justify-center bg-primary'>
      <div className='flex w-full max-w-screen-sm place-items-center p-8 sm:p-16'>
        <div className='m-auto w-full'>
          <div className='mb-4 flex h-32 items-center justify-center rounded-lg border-4'>
            <h1 className='text-2xl font-black text-primary-foreground sm:text-4xl'>CreAtiveTTV</h1>
          </div>
          <p className='mb-16 text-center text-xl font-medium text-muted-foreground'>Enter the text you want to read</p>
          <div className='grid gap-6'>
            <Textarea
              placeholder='Type your text here.'
              value={speechText}
              onChange={(e) => {
                setSpeechText(e.target.value);
              }}
              maxLength={140}
            />
            <Button
              variant='secondary'
              onClick={() => {
                speech();
                setSpeechText('');
              }}
            >
              <AudioLines className='mr-2 size-4' />
              Generate Voice
            </Button>
            <div className='mt-12 flex flex-col sm:flex-row'>
              <div className='mb-4 w-32 sm:mb-0'>
                <p className='text-lg font-medium text-primary-foreground'>Pitch</p>
              </div>
              <Slider
                defaultValue={[1]}
                max={2}
                min={0}
                step={0.1}
                onValueChange={(value) => {
                  setSpeechPitch(value[0]);
                }}
              />
            </div>
            <div className='flex flex-col sm:flex-row'>
              <div className='mb-4 w-32 sm:mb-0'>
                <p className='text-lg font-medium text-primary-foreground'>Rate</p>
              </div>
              <Slider
                defaultValue={[1]}
                max={2}
                min={0}
                step={0.1}
                onValueChange={(value) => {
                  setSpeechRate(value[0]);
                }}
              />
            </div>
            <div className='flex flex-col sm:flex-row'>
              <div className='mb-4 w-32 sm:mb-0'>
                <p className='text-lg font-medium text-primary-foreground'>Volume</p>
              </div>
              <Slider
                defaultValue={[1]}
                max={1}
                min={0}
                step={0.05}
                onValueChange={(value) => {
                  setSpeechVolume(value[0]);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
